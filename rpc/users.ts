// Queries for the users table
import { sql } from '@vercel/postgres';

/**
 * Get all users
 */
export async function getUsers() {
  return await sql`SELECT * FROM users`;
}

/**
 * Get a single user by id
 */
export async function getUser(id: string) {
  return await sql`SELECT * FROM users WHERE id = ${id}`;
}

/**
 * Get a single user by email
 */
export async function getUserByEmail(email: string) {
  // TODO: sanitize all input
  return await sql`SELECT * FROM users WHERE email = ${email}`;
}
