import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: process.env.SSS_MODE === 'REQUIRED' ? {
    rejectUnauthorized: false, // For Aiven cloud usually
    ca: process.env.CA_CERT ? process.env.CA_CERT : undefined
  } : undefined
});

export const db = drizzle(connection, { schema, mode: 'default' });
