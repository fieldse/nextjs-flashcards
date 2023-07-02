exports.up = async (sql) => {
  await sql`
    CREATE TABLE ??? (
      id              serial PRIMARY KEY,
      updated_at      timestamp DEFAULT current_timestamp,
      created_at      timestamp DEFAULT current_timestamp,
    )
    `;
  await sql`CREATE TRIGGER updated_at BEFORE UPDATE ON ??? FOR EACH ROW EXECUTE PROCEDURE updated_at()`;
};

exports.down = async (sql) => {
  await sql`DROP TRIGGER IF EXISTS updated_at ON ???`;
  await sql`DROP TABLE ???`;
};
