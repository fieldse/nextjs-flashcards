// Queries for the cards table
import { Card } from '@/server/types';
import { sql } from '@vercel/postgres';

/**
 * Get all cards
 */
export async function getAll(opts: { limit?: number } = {}) {
  return await sql<Card>`SELECT * FROM cards LIMIT ${opts.limit || 50}`;
}

/**
 * Get a single card by id
 */
export async function get(id: string) {
  return await sql<Card>`SELECT * FROM cards WHERE id = ${id}`;
}

/**
 * Get all cards for given deck
 */
export async function getAllForDeck(deckId: string) {
  return await sql<Card>`SELECT * FROM cards WHERE deck_id = ${deckId}`;
}
