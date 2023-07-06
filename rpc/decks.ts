// Queries for the decks table
import { Card, Deck, DeckWithCardCount } from '@/server/types';
import { sql } from '@vercel/postgres';

/**
 * Get all decks
 */
export async function getAll() {
  return await sql<Deck>`SELECT * FROM decks`;
}

/**
 * Get all decks with card counts
 */
export async function getAllWithCardCounts() {
  return await sql<DeckWithCardCount>`
    SELECT 
      d.*,
      COUNT(cd.*) "card_count"
    FROM decks d
    LEFT JOIN cards_decks cd ON cd.deck_id = d.id
    GROUP BY d.id
  `;
}

/**
 * Get a single deck by id
 */
export async function get(id: string) {
  return await sql<Deck>`SELECT * FROM decks WHERE id = ${id}`;
}

/**
 * Get all cards for given deck
 */
export async function getDeckCards(id: string) {
  return await sql<Card>`SELECT * FROM cards WHERE deck_id = ${id}`;
}
