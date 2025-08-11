import express from "express";
import pool from "../db.ts";

interface AuthenticatedRequest extends express.Request {
  userId?: number;
}

const router = express.Router();
const client = await pool.connect();

// Add a review on a business
router.post("/", async (req: AuthenticatedRequest, res: express.Response) => {
  try {
    await client.query("BEGIN");
    const userId = req.userId;
    const { businessId } = req.params;
    const { rating } = req.body;

    if (
      isNaN(parseInt(businessId)) ||
      !businessId ||
      typeof rating !== "number" ||
      !rating
    ) {
      res.status(400).json({ message: "Invalid parameters." });
      return;
    }

    const newRating = await pool.query(
      `
      INSERT INTO ratings (customer_id, rating)
      SELECT $1, $2
      WHERE NOT EXISTS
      (SELECT 1
      FROM ratings r
      INNER JOIN business_ratings br ON br.rating_id = r.id
      WHERE r.customer_id = $1
      AND br.business_id = $3)
      RETURNING id
      `,
      [userId, rating, businessId]
    );

    const newRatingId = newRating.rows[0].id;

    if (!newRatingId) {
      res.status(400).json({
        message: "User has a already left a review on this business.",
      });
      return;
    }

    await pool.query(
      `
      INSERT INTO business_ratings (business_id, rating_id)
      VALUES ($1, $2)
      `,
      [parseInt(businessId), newRatingId]
    );

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    client.release();
  }
});