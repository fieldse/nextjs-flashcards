// Queries for the decks table
import { sql } from '@vercel/postgres';

/**
 * Get all decks
 */
export async function getAll() {
  return await sql`SELECT * FROM decks`;
}

/**
 * Get a single deck by id
 */
export async function get(id: string) {
  return await sql`SELECT * FROM decks WHERE id = ${id}`;
}

/**
 * Get all cards for given deck
 */
export async function getDeckCards(id: string) {
  return await sql`SELECT * FROM cards WHERE deck_id = ${id}`;
}
