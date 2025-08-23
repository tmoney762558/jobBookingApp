import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "postgres",
});

export default pool;