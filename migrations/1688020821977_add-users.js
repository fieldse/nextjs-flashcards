/* eslint-disable camelcase */
exports.up = async (sql) => {
  await sql`
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        image VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;
};

exports.down = async (sql) => {
  await sql`
        DROP TABLE IF EXISTS users;
    `;
};
