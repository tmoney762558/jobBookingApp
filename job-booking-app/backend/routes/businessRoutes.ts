import express from "express";
import pool from "../db.ts";

interface AuthenticatedRequest extends express.Request {
  userId?: number;
}

const router = express.Router();

// Get list of businesses (with no ordering / filtering)
// Note: Update this in final version
router.get("/", async (req: AuthenticatedRequest, res: express.Response) => {
  try {
    const { limit, offset } = req.query;

    const businesses = await pool.query(
      `
        SELECT name, location, description, category, phone_number, website_link
        FROM businesses
        LIMIT $1
        OFFSET $2
      `,
      [limit, offset]
    );

    res.status(200).json({ businesses: businesses.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get the 10 highest rated businesses
router.get("/top", async (req: AuthenticatedRequest, res: express.Response) => {
  try {
    const topBusinesses = await pool.query(
      `
      SELECT b.id, b.name, b.category, b.description,
      AVG(r.rating) AS avg_rating,
      COUNT(r.rating) AS total_reviews
      FROM businesses b
      INNER JOIN business_ratings br ON b.id = br.business_id
      INNER JOIN ratings r ON br.rating_id = r.id
      GROUP BY b.id, b.name
      ORDER BY avg_rating
      LIMIT 10
      `
    );

    if (!topBusinesses.rows[0]) {
      res.status(404).json({ message: "No businesses found." });
      return;
    }

    res.status(200).json(topBusinesses.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get information for a business (to fill out the editor)
router.get(
  "/fill/:businessId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { businessId } = req.params;

      if (isNaN(parseInt(businessId))) {
        res.status(400).json({ message: "Invalid paramaters." });
        return;
      }

      const businessInfo = await pool.query(
        `
        SELECT name, location, description, category, phone_number, website_link
        FROM businesses
        WHERE business_owner_id = $1 AND id = $2
        `,
        [userId, businessId]
      );

      res.status(200).json(businessInfo.rows[0]);
    } catch (err) {
      console.error(err);
    }
  }
);

// Get basic information for all businesses a user owns
router.get(
  "/info",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;

      const businessInfo = await pool.query(
        `
        SELECT
        b.id,
        b.name,
        b.description,
        b.total_revenue,
        COUNT(DISTINCT s.id) AS service_count,
        COUNT(DISTINCT bk.id) AS booking_count
        FROM
        businesses b
        LEFT JOIN services s ON b.id = s.business_id
        LEFT JOIN bookings bk ON b.id = bk.business_id
        WHERE b.business_owner_id = $1
        GROUP BY b.id, b.name
        `,
        [userId]
      );

      res.status(200).json(businessInfo.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Create a new business for a user
router.post("/", async (req: AuthenticatedRequest, res: express.Response) => {
  try {
    const userId = req.userId;
    const { name, location, description, category, phoneNumber, websiteLink } =
      req.body;

    if (
      typeof name !== "string" ||
      !name ||
      typeof location !== "string" ||
      !location ||
      typeof description !== "string" ||
      !description ||
      typeof category !== "string" ||
      !category ||
      typeof phoneNumber !== "string" ||
      !phoneNumber ||
      typeof websiteLink !== "string"
    ) {
      res.status(400).json({
        message:
          "One or more required fields were not invalid or not provided.",
      });
      return;
    }

    const nameTaken = await pool.query(
      `
          SELECT id FROM businesses
          WHERE name = $1
      `,
      [name]
    );

    if (nameTaken.rows[0]) {
      res.status(400).json({
        message: "Business name is taken, please select another one.",
      });
    }

    const newBusiness = await pool.query(
      `
        INSERT INTO businesses (business_owner_id, name, location, description, category, phone_number, website_link)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
    `,
      [userId, name, location, description, category, phoneNumber, websiteLink]
    );

    res
      .status(200)
      .json({
        message: "Sucessfully created business.",
        businessId: newBusiness.rows[0].id,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update a business for user
router.put(
  "/:businessId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { businessId } = req.params;
      const {
        name,
        location,
        description,
        category,
        phoneNumber,
        websiteLink,
      } = req.body;

      if (
        typeof name !== "string" ||
        !name ||
        typeof location !== "string" ||
        !location ||
        typeof description !== "string" ||
        !description ||
        typeof category !== "string" ||
        !category ||
        typeof phoneNumber !== "string" ||
        !phoneNumber ||
        typeof websiteLink !== "string"
      ) {
        res.status(400).json({
          message: "One or more fields were invalid or not provided.",
        });
        return;
      }

      const newNameInvalid = await pool.query(
        `
          SELECT id FROM businesses
          WHERE name = $1 AND id != $2
        `,
        [name, businessId]
      );

      if (newNameInvalid.rows[0]) {
        res.status(400).json({
          message: "Business name is taken, please select another.",
        });
        return;
      }

      const updatedBusiness = await pool.query(
        `
            UPDATE businesses
            SET name = $1, location = $2, description = $3, category = $4, phone_number = $5, website_link = $6
            WHERE id = $7 AND business_owner_id = $8
            RETURNING id
        `,
        [
          name,
          location,
          description,
          category,
          phoneNumber,
          websiteLink,
          businessId,
          userId,
        ]
      );

      if (!updatedBusiness.rows[0]) {
        res.status(400).json({ message: "Invalid business to update." });
        return;
      }

      res.status(200).json({ message: "Successfully updated business." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Delete a business for a user
router.delete(
  "/:businessId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { businessId } = req.params;

      const deletedBusiness = await pool.query(
        `
            DELETE FROM businesses
            WHERE id = $1 AND business_owner_id = $2
            RETURNING id
        `,
        [parseInt(businessId), userId]
      );

      if (!deletedBusiness.rows[0]) {
        res.status(400).json({ message: "Invalid business to delete." });
        return;
      }

      res.status(200).json({ message: "Business successfully deleted." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;
