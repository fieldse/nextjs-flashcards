// Queries for the users table
import { sql } from '@vercel/postgres';
import { User } from '../server/types';

/**
 * Get all users
 */
export async function getAll(opts: { limit?: number } = {}) {
  return await sql<User>`SELECT * FROM users LIMIT ${opts.limit || 100}`;
}

/**
 * Get a single user by id
 */
export async function get(id: string) {
  const { rows } = await sql<User>`SELECT * FROM users WHERE id = ${id}`;
  return rows[0];
}

/**
 * Get a single user by email
 */
export async function getByEmail(email: string) {
  // TODO: sanitize all input
  return await sql<User>`SELECT * FROM users WHERE email = ${email}`;
}
