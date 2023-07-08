// Queries for the decks table
import { Card, Deck, DeckWithCardCount } from '@/server/types';
import { sql } from '@vercel/postgres';

/**
 * Get all decks
 */
export async function getAll(opts: { limit?: number } = {}) {
  return await sql<Deck>`SELECT * FROM decks
  LIMIT ${opts?.limit || 50}
  `;
}

/**
 * Get all decks with card counts
 */
export async function getAllWithCardCounts(opts: { limit?: number } = {}) {
  return await sql<DeckWithCardCount>`
    SELECT 
      d.*,
      COUNT(cd.*) "cardCount"
    FROM decks d
    LEFT JOIN cards_decks cd ON cd.deck_id = d.id
    GROUP BY d.id
    LIMIT ${opts?.limit || 50}
  `;
}

/**
 * Get a single deck by id
 */
export async function get(id: number) {
  const { rows } = await sql<Deck>`SELECT * FROM decks WHERE id = ${id}`;
  return rows[0];
}

/**
 * Get all cards for given deck
 */
export async function getDeckCards(id: number) {
  return await sql<Card>`SELECT * FROM cards WHERE deck_id = ${id}`;
}
