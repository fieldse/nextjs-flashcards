// Queries for the cards table
import { Card } from '@/server/types';
import { sql } from '@vercel/postgres';

/**
 * Get all cards
 */
export async function getAll({ limit = 50 }: { limit?: number }) {
  return await sql.query<Card>(`SELECT * FROM cards LIMIT $1`, [limit]);
}

/**
 * Get all card IDs, for prebuilding routes
 */
export async function getAllIDs() {
  const data = await sql<{ id: number }>`SELECT id FROM cards`;
  return data.rows.map((x) => x.id);
}

/**
 * Get a single card by id
 */
export async function get(id: number | string) {
  const { rows } = await sql<Card>`SELECT * FROM cards WHERE id = ${id}`;
  return rows[0];
}

/**
 * Get all cards for given deck
 */
export async function getAllForDeck(deckId: number) {
  return await sql<Card>`SELECT * FROM cards WHERE deck_id = ${deckId}`;
}
