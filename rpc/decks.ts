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

/*
 * Get all deck IDs, for prebuilding routes
 */
export async function getAllIDs() {
  const data = await sql<{ id: number }>`SELECT id FROM decks`;
  return data.rows.map((x) => x.id);
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
  const { rows } = await sql.query<Deck>(`SELECT * FROM decks WHERE id = $1`, [id]);
  return rows[0];
}

/**
 * Get deck details and all cards for given deck
 */
export async function getDeckCards(deckId: number) {
  const deck = await get(deckId);
  const q = `
    SELECT c.* 
    FROM cards_decks cd
    LEFT JOIN cards c ON c.id = cd.card_id
    WHERE cd.deck_id = $1
    ORDER BY c.id`;
  const { rows: cards } = await sql.query<Card>(q, [deckId]);
  return {
    deck,
    cards,
  };
}

/**
 * Get card IDs for a deck
 */
export async function getDeckCardIds(deckId: number) {
  const q = `
    SELECT card_id FROM cards_decks cd
    WHERE cd.deck_id = $1
    ORDER BY card_id`;
  const { rows } = await sql.query<{ id: number }>(q, [deckId]);
  return rows.map((x) => x.id);
}

/**
 * Get all deck+cardId combinations // fixme: should remove this
 */
export async function getAllDeckCardIds() {
  return await sql<{ deckId: number; cardId: number }>`
    SELECT deck_id "deckId", card_id "cardId" FROM cards_decks cd
    ORDER BY deck_id, card_id`;
}
