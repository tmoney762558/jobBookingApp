import express from "express";
import { createServer } from "http";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.ts";
import authMiddleware from "./middleware/authMiddleware.ts";
import businessRoutes from "./routes/businessRoutes.ts";
import serviceRoutes from "./routes/serviceRoutes.ts";
import bookingRoutes from "./routes/bookingRoutes.ts";

const app = express();
const server = createServer(app);

const PORT = 3001;

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

// Helmet Configuration
const helmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "blob:", "data:"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
    },
  },
};

// Set up helmet, cors, and express.json
app.use(helmet(helmetOptions));
app.use(cors(corsOptions));
app.use(express.json());

// Set up all routes
app.use("/auth", authRoutes);
app.use("/businesses", authMiddleware, businessRoutes);
app.use("/services", authMiddleware, serviceRoutes);
app.use("/bookings", authMiddleware, bookingRoutes);

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}.`);
});