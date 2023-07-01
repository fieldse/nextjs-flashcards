exports.up = async (sql) => {
  await sql`
    CREATE TABLE cards (
      id                        serial PRIMARY KEY,
      headword                  CHARACTER VARYING(255) NOT NULL,
      definition                TEXT NOT NULL,
      headword_pronunciation    CHARACTER VARYING(255) NOT NULL,
      headword_language         CHARACTER VARYING(10) DEFAULT 'en',
      definition_language       CHARACTER VARYING(10) DEFAULT 'en',
      updated_at                timestamp DEFAULT current_timestamp,
      created_at                timestamp DEFAULT current_timestamp
    )
    `;
};

exports.down = async (sql) => {
  await sql`DROP TABLE cards`;
};
