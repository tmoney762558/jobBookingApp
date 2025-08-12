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
    try {
      const { query, category, orderBy } = req.query;

      if (!query && !orderBy) {
        res.status(400).json({ message: "Query was not provided." });
        return;
      }

      if (
        category !== "Labor" &&
        category !== "Education" &&
        category !== "Childcare" &&
        category !== "Entertainment" &&
        category !== "Freelance" &&
        category !== ""
      ) {
        res.status(400).json({ message: "Invalid query parameters." });
        return;
      }

      let categoryQuery: string;

      if (category === "") {
        categoryQuery = "";
      } else {
        categoryQuery = `AND services.category = $2`;
      }

      const searchQuery = await pool.query(
        `
            SELECT services.name AS service_name, services.price, services.description, services.duration, services.category,
            businesses.name AS business_name, businesses.location
            FROM services
            LEFT JOIN businesses ON businesses.id = services.business_id
            WHERE services.name ILIKE $1
            ${categoryQuery}
        `,
        category === "" ? [query + "%"] : [query + "%", category]
      );

      if (!searchQuery.rows[0]) {
        res
          .status(400)
          .json({ message: "Could not find any matching services." });
        return;
      }

      res.status(200).json(searchQuery.rows);
    } catch (err) {
      console.error(err);
    }
  }
);

// Get all services for a business
router.get(
  "/:businessId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const { businessId } = req.params;

      if (isNaN(parseInt(businessId))) {
        res.status(400).json({ message: "Invalid business id." });
        return;
      }

      const businessServices = await pool.query(
        `
            SELECT id, name, price, description, duration, category
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
      console.error(err);
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
      const { title, price, description, duration, category } = req.body;

      if (
        typeof title !== "string" ||
        !title ||
        typeof description !== "string" ||
        !description ||
        typeof duration !== "string" ||
        !duration ||
        typeof category !== "string" ||
        !category
      ) {
        res.status(400).json({
          message: "One or more fields were invalid or not provided.",
        });
        return;
      }

      if (!price || isNaN(parseInt(price.slice(1)))) {
        res
          .status(400)
          .json({ message: "Invalid price format. Please type value in USD." });
        return;
      }

      if (typeof parseInt(businessId) !== "number") {
        res.status(400).json({ message: "Invalid business id." });
        return;
      }

      if (
        category !== "Labor" &&
        category !== "Education" &&
        category !== "Childcare" &&
        category !== "Entertainment" &&
        category !== "Freelance" &&
        category !== "All"
      ) {
        res.status(400).json({ message: "Invalid category." });
        return;
      }

      const newService = await pool.query(
        `
            INSERT INTO services (business_id, name, price, description, duration, category)
            SELECT b.id, $1, $2, $3, $4, $5
            FROM businesses b
            WHERE b.id = $6 AND b.business_owner_id = $7
            RETURNING id
        `,
        [title, price, description, duration, category, businessId, userId]
      );

      if (!newService.rows[0]) {
        res.status(400).json({
          message: "User is not authorized to add services for this business.",
        });
        return;
      }

      res.status(200).json({ message: "Successfully created service." });
    } catch (err) {
      console.error(err);
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
      const { title, price, description, duration, category } = req.body;

      if (
        typeof title !== "string" ||
        !title ||
        typeof description !== "string" ||
        !description ||
        typeof duration !== "string" ||
        !duration ||
        typeof category !== "string" ||
        !category
      ) {
        res.status(400).json({
          message: "One or more fields were invalid or not provided.",
        });
        return;
      }

      if (isNaN(parseInt(price.slice(1))) || !price) {
        res
          .status(400)
          .json({ message: "Invalid price format. Please type value in USD." });
        return;
      }

      if (
        category !== "Labor" &&
        category !== "Education" &&
        category !== "Childcare" &&
        category !== "Entertainment" &&
        category !== "Freelance" &&
        category !== "All"
      ) {
        res.status(400).json({ message: "Invalid category." });
        return;
      }

      if (typeof parseInt(serviceId) !== "number") {
        res.status(400).json({ message: "Invalid service id." });
        return;
      }

      const updatedService = await pool.query(
        `
        UPDATE services s
        SET name = $1, price = $2, description = $3, duration = $4
        FROM businesses b
        WHERE s.business_id = b.id
        AND b.business_owner_id = $5
        AND s.id = $6
        RETURNING s.id
        `,
        [title, price, description, duration, userId, serviceId]
      );

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
