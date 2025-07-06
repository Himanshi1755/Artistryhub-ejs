import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "ejsproject",
    host:"localhost"
});

export default pool;