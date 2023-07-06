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
    c.cardCount
  FROM decks d
  LEFT JOIN (
    SELECT 
      deck.id "deck_id",
      COUNT(*) "cardCount"
    FROM cards cc
    WHERE cc.deck_id = d.id
  ) c ON c.deck_id = d.id
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
