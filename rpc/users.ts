// Queries for the users table
import { sql } from '@vercel/postgres';
import { User } from '../server/types';

/**
 * Get all users
 */
export async function getAll() {
  return await sql<User>`SELECT * FROM users`;
}

/**
 * Get a single user by id
 */
export async function get(id: string) {
  return await sql<User>`SELECT * FROM users WHERE id = ${id}`;
}

/**
 * Get a single user by email
 */
export async function getByEmail(email: string) {
  // TODO: sanitize all input
  return await sql<User>`SELECT * FROM users WHERE email = ${email}`;
}
