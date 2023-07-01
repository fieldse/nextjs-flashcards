// Queries for the cards table
import { sql } from '@vercel/postgres';

/**
 * Get all cards
 */
export async function getCards() {
  return await sql`SELECT * FROM cards`;
}

/**
 * Get a single card by id
 */
export async function getCard(id: string) {
  return await sql`SELECT * FROM cards WHERE id = ${id}`;
}

/**
 * Get all cards for given deck
 */
export async function getCardsForDeck(deckId: string) {
  return await sql`SELECT * FROM cards WHERE deck_id = ${deckId}`;
}
