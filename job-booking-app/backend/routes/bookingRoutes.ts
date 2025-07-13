import express from "express";
import pool from "../db.ts";

interface AuthenticatedRequest extends express.Request {
  userId?: number;
}

const router = express.Router();

// Get all bookings for a user
router.get("/", async (req: AuthenticatedRequest, res: express.Response) => {
  try {
    const userId = req.userId;

    const bookings = await pool.query(
      `
                SELECT location, current_offer, status FROM bookings
                WHERE customer_id = $1
            `,
      [userId]
    );

    if (!bookings.rows[0]) {
      res.status(400).json({ message: "No bookings found" });
      return;
    }

    res.status(200).json({ bookings });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all bookings for a business
router.get(
  "/:businessId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { businessId } = req.params;

      const bookings = await pool.query(
        `
        SELECT location, current_offer, status FROM bookings
        WHERE EXISTS (SELECT id FROM businesses WHERE business_owner_id = $1)
        AND business_id = $2
      `,
        [userId, businessId]
      );

      if (!bookings.rows[0]) {
        res.status(400).json({ message: "No bookings found" });
        return;
      }

      res.status(200).json({ bookings });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Create a new booking
router.post(
  "/:businessId/:serviceId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { businessId, serviceId } = req.params;
      const { location, description, currentOffer } = req.body;

      if (
        typeof location !== "string" ||
        !location ||
        typeof description !== "string" ||
        !description ||
        typeof currentOffer !== "number" ||
        !currentOffer
      ) {
        res.status(400).json({
          message: "One or more fields were invalid or not provided.",
        });
      }

      const newBooking = await pool.query(
        `
            INSERT INTO bookings (business_id, customer_id, location, description, current_offer)
            SELECT b.id, $1, $2, $3, $4
            FROM businesses b
            WHERE EXISTS
            (SELECT id FROM services WHERE id = $6 AND business_id = $5)
            AND EXISTS (SELECT id FROM businesses WHERE id = $5 AND business_owner_id = $1)
            RETURNING id
        `,
        [userId, location, description, currentOffer, businessId, serviceId]
      );

      // Will trigger if the user does not own the business under the provided id
      // or if either parameter has no data
      if (!newBooking.rows[0]) {
        res.status(400).json({ message: "Invalid parameters." });
        return;
      }

      res.status(200).json({ message: "Successfully created booking." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Edit current offer for a booking
router.put(
  "/:bookingId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { bookingId } = req.params;
      const { updatedOffer } = req.body;

      if (typeof updatedOffer !== "string" || !updatedOffer) {
        res.status(400).json({ message: "Updated offer not provided." });
      }

      const updatedBooking = await pool.query(
        `
            UPDATE bookings
            SET current_offer = $1
            WHERE id = $2 AND customerId = $3
            RETURNING id
        `,
        [updatedOffer, bookingId, userId]
      );

      if (!updatedBooking.rows[0]) {
        res.status(400).json({ message: "Invalid booking id." });
        return;
      }

      res.status(200).json({ message: "Successfully updated offer." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Cancel a booking as a customer
router.delete(
  "/:bookingId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { bookingId } = req.params;

      const updatedBooking = await pool.query(
        `
            DELETE FROM bookings b
            WHERE id = $1 AND customer_id = $2
        `,
        [bookingId, userId]
      );

      if (!updatedBooking.rows[0]) {
        res.status(400).json({ message: "Invalid booking id." });
        return;
      }

      res.status(200).json({ message: "Successfully cancelled booking." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Cancel a booking as a business owner
router.delete(
  "/owner/:bookingId",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { bookingId } = req.params;

      const deletedBooking = await pool.query(
        `
            DELETE FROM bookings
            WHERE id = $1 AND 
            EXISTS (SELECT id FROM businesses WHERE business_owner_id = $2)
            RETURNING id
        `,
        [bookingId, userId]
      );

      if (!deletedBooking.rows[0]) {
        res.status(400).json({ message: "Invalid booking id." });
        return;
      }

      res.status(200).json({ message: "Successfully cancelled booking." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;