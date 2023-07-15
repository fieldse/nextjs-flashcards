// Adds a 'decks' table
exports.up = async (sql) => {
  await sql`
    CREATE TABLE decks (
      id              serial PRIMARY KEY,
      title           CHARACTER VARYING(255) NOT NULL,
      description     TEXT,
      parent_deck_id  INT,
      updated_at      timestamp DEFAULT current_timestamp,
      created_at      timestamp DEFAULT current_timestamp
    )
    `;
  await sql`
    ALTER TABLE decks 
    ADD CONSTRAINT fk_parent_deck_id FOREIGN KEY(parent_deck_id) REFERENCES decks(id) 
    ON DELETE CASCADE
    `;

  await sql`
    CREATE TABLE cards_decks (
      deck_id         INT NOT NULL,
      card_id         INT NOT NULL,
      CONSTRAINT fk_deck_id FOREIGN KEY(deck_id) REFERENCES decks(id) ON DELETE CASCADE,
      CONSTRAINT fk_card_id FOREIGN KEY(card_id) REFERENCES cards(id) ON DELETE CASCADE
    )
    `;
  await sql`CREATE UNIQUE INDEX cards_decks_idx ON cards_decks (deck_id, card_id)`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE IF EXISTS cards_decks`;
  await sql`DROP TABLE IF EXISTS decks`;
};
