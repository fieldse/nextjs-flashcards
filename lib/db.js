// Load the necessary environment settings to manually open a
// db connection

// load environment settins
require('./loadEnvs');
const { sql } = require('@vercel/postgres');

module.exports = {
  sql,
};
