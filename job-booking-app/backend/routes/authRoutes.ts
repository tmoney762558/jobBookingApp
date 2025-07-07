import express from "express";
import pool from "../db.ts";

const router = express.router();

router.post("register", async (req: express.Request, res: express.Response) => {
    const {username, password} = req.body;

    pool.query(`INSERT INTO`)
});