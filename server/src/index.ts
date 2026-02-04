import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { db } from './db';
import { blogPosts, portfolioItems } from './schema';
import { desc, eq } from 'drizzle-orm';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new Hono();

app.use('*', logger());
app.use('*', cors({
  origin: '*', // Simplified for debugging
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Debugging: Log all incoming requests
app.use('*', async (c, next) => {
  console.log(`Incoming request: ${c.req.method} ${c.req.url}`);
  await next();
});

// Health check
app.get('/', (c) => c.text('Portfolio API is running'));

// Blog routes
app.get('/api/blog', async (c) => {
  try {
    const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
    return c.json(posts);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to fetch blog posts' }, 500);
  }
});

app.post('/api/blog', async (c) => {
  try {
    const body = await c.req.json();
    const result = await db.insert(blogPosts).values(body);
    return c.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to create blog post' }, 500);
  }
});

// Portfolio routes
app.get('/api/portfolio', async (c) => {
  try {
    const items = await db.select().from(portfolioItems).orderBy(desc(portfolioItems.createdAt));
    return c.json(items);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to fetch portfolio items' }, 500);
  }
});

app.post('/api/portfolio', async (c) => {
  try {
    const body = await c.req.json();
    const result = await db.insert(portfolioItems).values(body);
    return c.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to create portfolio item' }, 500);
  }
});

// 404 Handler
app.notFound((c) => {
  console.error(`404 Not Found: ${c.req.method} ${c.req.url}`);
  return c.json({ error: 'Route not found', path: c.req.url }, 404);
});

// Error Handler
app.onError((err, c) => {
  console.error('SERVER ERROR:', err);
  return c.json({ error: 'Internal Server Error', message: err.message }, 500);
});

const port = Number(process.env.PORT) || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});