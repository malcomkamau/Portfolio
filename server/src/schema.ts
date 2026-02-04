import { mysqlTable, serial, varchar, text, timestamp } from 'drizzle-orm/mysql-core';

export const blogPosts = mysqlTable('blog_posts', {
  id: varchar('id', { length: 255 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  date: varchar('date', { length: 50 }).notNull(),
  image: varchar('image', { length: 500 }).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const portfolioItems = mysqlTable('portfolio_items', {
  id: varchar('id', { length: 255 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  image: varchar('image', { length: 500 }).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
