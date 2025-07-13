import express from "express";
import pool from "../db.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register a new user
router.post(
  "/register",
  async (req: express.Request, res: express.Response) => {
    try {
      const { username, password }: { username: string; password: string } =
        req.body;

      if (
        typeof username !== "string" ||
        typeof password !== "string" ||
        !username ||
        !password
      ) {
        res
          .status(400)
          .json({ message: "Valid username and password not provided." });
        return;
      }

      if (username.length > 15) {
        res.status(400).json({ message: "Username is too long." });
        return;
      }

      if (password.length > 20) {
        res.status(400).json({ message: "Password is too long" });
        return;
      }

      const hashedPassword = bcrypt.hashSync(password, 8);

      const newId = await pool.query(
        `
        INSERT INTO users (username, hashed_password)
        VALUES ($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING id

        `,
        [username, hashedPassword]
      );

      if (!newId.rows[0]) {
        res.status(400).json({ message: "User already exists." });
        return;
      }

      // Remove the fallback from production
      const token = jwt.sign(
        {
          id: newId.rows[0].id,
        },
        process.env.JWT_SECRET || "randomText"
      );

      res.status(200).json({ token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error." });
    }
  }
);

// Login a new user
router.post("/login", async (req: express.Request, res: express.Response) => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username ||
      !password
    ) {
      res
        .status(400)
        .json({ message: "Valid username and password not provided." });
      return;
    }

    const foundMatch = await pool.query(
      `
        SELECT id, hashed_password FROM users
        WHERE username = $1
        `,
      [username]
    );

    if (!foundMatch.rows[0]) {
      res.status(400).json({ message: "Incorrect username or password." });
    }

    const hashedPassword = foundMatch.rows[0].hashed_password;
    const passwordIsValid = bcrypt.compareSync(password, hashedPassword);

    if (!passwordIsValid) {
      res.status(400).json({ message: "Incorrect username or password." });
      return;
    }

    const token = jwt.sign(
      {
        id: foundMatch.rows[0].id,
      },
      process.env.JWT_SECRET || "randomText"
    );

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error." });
  }
});

export default router;
