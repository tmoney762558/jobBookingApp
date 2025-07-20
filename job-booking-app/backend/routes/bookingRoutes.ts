import express from "express";
import pool from "../db.ts";

interface AuthenticatedRequest extends express.Request {
  userId?: number;
}

const router = express.Router();

// Get all bookings for a customer
router.get("/", async (req: AuthenticatedRequest, res: express.Response) => {
  try {
    const userId = req.userId;

    const bookings = await pool.query(
      `
      SELECT 
      services.name AS service_name,
      bookings.status,
      bookings.description,
      bookings.created_at,
      bookings.location,
      bookings.current_offer,
      businesses.name AS business_name,
      businesses.phone_number
      FROM bookings
      LEFT JOIN services ON services.id = bookings.service_id
      LEFT JOIN businesses ON businesses.id = bookings.business_id
      WHERE bookings.customer_id = $1
      ORDER BY bookings.created_at
      `,
      [userId]
    );

    if (!bookings.rows[0]) {
      res.status(400).json({ message: "No bookings found" });
      return;
    }

    res.status(200).json(bookings.rows);
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
        SELECT 
        users.username AS customer_name, 
        services.name AS service_name, 
        bookings.created_at, 
        bookings.location, 
        bookings.current_offer, 
        bookings.status,
        bookings.description
        FROM bookings
        LEFT JOIN users ON users.id = bookings.customer_id
        LEFT JOIN services ON services.id = bookings.service_id
        WHERE bookings.business_id = $2
        AND EXISTS (SELECT 1 FROM businesses WHERE businesses.id = bookings.business_id AND businesses.business_owner_id = $1)
        ORDER BY bookings.created_at
        `,
        [userId, businessId]
      );

      if (!bookings.rows[0]) {
        res.status(400).json({ message: "No bookings found" });
        return;
      }

      res.status(200).json(bookings.rows);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Get top 5 bookings for a business
router.get(
  "/:businessId/top",
  async (req: AuthenticatedRequest, res: express.Response) => {
    try {
      const userId = req.userId;
      const { businessId } = req.params;

      const bookings = await pool.query(
        `
        SELECT users.username, services.name, bookings.created_at, bookings.location, bookings.current_offer, bookings.status FROM bookings
        LEFT JOIN users ON users.id = bookings.customer_id
        LEFT JOIN services ON services.id = bookings.service_id
        WHERE bookings.business_id = $2
        AND EXISTS (SELECT 1 FROM businesses WHERE businesses.id = bookings.business_id AND businesses.business_owner_id = $1)
        ORDER BY bookings.created_at
        LIMIT 5
        `,
        [userId, parseInt(businessId)]
      );

      if (!bookings.rows[0]) {
        res.status(400).json({ message: "No bookings found" });
        return;
      }

      res.status(200).json(bookings.rows);
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
        isNaN(parseInt(businessId)) ||
        !businessId ||
        isNaN(parseInt(serviceId)) ||
        !serviceId ||
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
        return;
      }

      const newBooking = await pool.query(
        `
        INSERT INTO bookings (customer_id, business_id, service_id, location, description, current_offer)
        SELECT $1, b.id, $2, $3, $4, $5
        FROM businesses b
        WHERE EXISTS
        (SELECT id FROM services WHERE id = $2 AND business_id = b.id)
        RETURNING id
        `,
        [userId, parseInt(serviceId), location, description, currentOffer]
      );

      // Will trigger if the user does not own the business under the provided id
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
