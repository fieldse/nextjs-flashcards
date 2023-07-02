// Load the necessary environment settings to manually open a
// db connection
// Note: this will not work for queries in the frontend app, due to loading env files from disk

// load environment settins
require('./loadEnvs');
const { sql } = require('@vercel/postgres');

/**
 * Wrap a SQL operation in a transaction
 */
async function wrapTransaction(actionName, asyncFn) {
  console.log(actionName);
  try {
    await sql.query('BEGIN');
    await asyncFn();
    await sql.query('COMMIT');
    console.log(`${actionName} complete`);
  } catch (e) {
    console.log('error: ' + e.message);
    await sql.query('ROLLBACK');
    throw new Error(`${actionName} failed:` + e.message);
  }
}

module.exports = {
  sql,
  wrapTransaction,
};
