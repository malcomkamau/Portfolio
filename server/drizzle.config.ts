import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    schema: './src/schema.ts',
    out: './drizzle',
    dialect: 'mysql',
    dbCredentials: {
    host: process.env.DB_HOST || '',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || '',
    ssl: process.env.SSS_MODE === 'REQUIRED' ? {
      rejectUnauthorized: false
    } : undefined
  },
});
