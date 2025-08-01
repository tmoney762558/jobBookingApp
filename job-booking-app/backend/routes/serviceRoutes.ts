import express from "express";
import pool from "../db.ts";

interface AuthenticatedRequest extends express.Request {
  userId?: number;
}

const router = express.Router();

// Search for a service
router.get(
  "/search",
  async (req: AuthenticatedRequest, res: express.Response) => {
    const { query } = req.query;

    if (!query) {
      res.status(400).json({ message: "Query was not provided." });
    }

    const searchQuery = await pool.query(
      `
            SELECT name, price, description, duration
            FROM services
            WHERE name ILIKE $1
        `,
      [query + "%"]
    );

    if (!searchQuery.rows[0]) {
      res
        .status(400)
        .json({ message: "Could not find any matching services." });
      return;
    }

    res.status(200).json(searchQuery.rows);
  }
);

// Get all services for a business
router.get(
  "/:businessId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const { businessId } = req.params;

      if (typeof parseInt(businessId) !== "number") {
        res.status(400).json({ message: "Invalid business id." });
        return;
      }

      const businessServices = await pool.query(
        `
            SELECT id, name, price, description, duration
            FROM services
            WHERE business_id = $1
        `,
        [parseInt(businessId)]
      );

      if (!businessServices.rows[0]) {
        res
          .status(400)
          .json({ message: "No services could be found for this business." });
        return;
      }

      res.status(200).json(businessServices.rows);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Add a service for a business
router.post(
  "/:businessId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { businessId } = req.params;
      const { title, price, description, duration } = req.body;

      if (
        typeof title !== "string" ||
        !title ||
        typeof price !== "number" ||
        !price ||
        typeof description !== "string" ||
        !description ||
        typeof duration !== "string" ||
        !duration
      ) {
        res
          .status(400)
          .json({ message: "One or fields were invalid or not provided." });
        return;
      }

      if (typeof parseInt(businessId) !== "number") {
        res.status(400).json({ message: "Invalid business id." });
        return;
      }

      const newService = await pool.query(
        `
            INSERT INTO services (business_id, name, price, description, duration)
            SELECT b.id, $1, $2, $3, $4
            FROM businesses b
            WHERE b.id = $5 AND b.business_owner_id = $6
            RETURNING id
        `,
        [title, price, description, duration, businessId, userId]
      );

      if (!newService.rows[0]) {
        res.status(400).json({
          message: "User is not authorized to add services for this business.",
        });
        return;
      }

      res.status(200).json({ message: "Successfully created service." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Edit a service for a business
router.put(
  "/:serviceId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { serviceId } = req.params;
      const { title, price, description, duration } = req.body;

      if (
        typeof title !== "string" ||
        !title ||
        typeof price !== "number" ||
        !price ||
        typeof description !== "string" ||
        !description ||
        typeof duration !== "string" ||
        !duration
      ) {
        res.status(400).json({
          message: "One or more fields were invalid or not provided.",
        });
        return;
      }

      const updatedService = await pool.query(
        `
                UPDATE services s
                SET service_title = $1, price = $2, description = $3, duration = $4
                FROM businesses b
                WHERE s.business_id = b.id
                AND b.business_owner_id = $5
                AND s.id = $6
                RETURNING s.id
        `,
        [title, price, description, duration, userId, serviceId]
      );

      if (typeof typeof parseInt(serviceId) !== "number") {
        res.status(400).json({ message: "Invalid parameters." });
        return;
      }

      if (!updatedService.rows[0]) {
        res.status(400).json({
          message:
            "User is not authorized to update services for this business.",
        });
        return;
      }

      res.status(200).json({ message: "Sucessfully updated service." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Delete a service for a business
router.delete(
  "/:serviceId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { serviceId } = req.params;

      const deletedService = await pool.query(
        `
            DELETE FROM services
            USING businesses
            WHERE services.business_id = businesses.id
            AND businesses.business_owner_id = $1
            AND services.id = $2
            RETURNING services.id
        `,
        [userId, serviceId]
      );

      if (!deletedService.rows[0]) {
        res.status(400).json({
          message:
            "User is not authorized to delete services for this business.",
        });
        return;
      }

      res.status(200).json({ message: "Sucessfully deleted service." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;
