import express from "express";
import { createServer } from "http";
import cors from "cors";
import helmet from "helmet";
import pool from "./db.ts";
import authRoutes from "./routes/authRoutes.ts";

const app = express();
const server = createServer(app);

const PORT = 3000;

// CORS Configuration
const corsOptions = {
  origin: ["/"],
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

async function checkDb() {
  try {
    const query = await pool.query(`SELECT * FROM users`);
    console.log("Users:", query.rows);
  } catch (err) {
    console.error("Database error:", err);
  }
}

checkDb();

// Set up helmet, cors, and express.json
app.use(helmet(helmetOptions));
app.use(cors(corsOptions));
app.use(express.json());

// Set up all routes
app.use("/auth", authRoutes)




server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}.`);
});
