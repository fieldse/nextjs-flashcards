/**
 * This is a basic migration script. It duplicates most of the functionality
 * of they Ley library.
 * This is an mjs file, not ts, so that we can run it quickly without
 * transpilation.
 * Modified to use the vercel postgres connection library.
 * credit: github.com/christophilus
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline/promises');
const { sql, wrapTransaction } = require('./db');
const migrationsDir = getMigrationsDir();
const loadMigration = (filename) => require(path.join(process.cwd(), migrationsDir, filename));

const actions = {
  new: actionNew,
  up: actionUp,
  down: actionDown,
  status: migrationsStatus,
};

function getMigrationsDir() {
  let dir = process.env.MIGRATIONS_DIR || './migrations/';
  if (!dir.endsWith('/')) {
    dir = dir + '/';
  }
  return dir;
}

/**
 * Create a new migration. The migration number is sequentially generated using
 * the numeric prefix of the last migration file in the migrations directory.
 */
async function actionNew({ files }) {
  let [, , , migrationName] = process.argv;

  while (!migrationName) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    migrationName = await rl.question('Name the migration: ');

    rl.close();
  }

  const prefix = (parseInt(files[files.length - 1] || '0') || 0) + 1;
  const fullFilename = `${migrationsDir}${prefix}-${migrationName}.js`;

  fs.writeFileSync(fullFilename, fs.readFileSync(path.join(__dirname, 'migration-template.js')));

  console.log(`Created: ${fullFilename}`);
}

/**
 * Run all of the missing up migrations.
 */
async function actionUp({ rows, files }) {
  // todo: should test against the migrations data actually in the database here
  if (rows.length > files.length) {
    console.error(`Migrations in the DB are ahead of migrations on disk.`);
    process.exit(1);
  }

  await wrapTransaction('migrate up', async () => {
    for (let i = 0; i < files.length; ++i) {
      const migration = rows[i];
      const filename = files[i];

      if (migration && migration.name !== filename) {
        console.error(`Database has "${migration.name}" but disk has "${filename}"`);
        process.exit(2);
      }

      if (!migration) {
        console.log(`Up: ${filename}`);
        await loadMigration(filename).up(sql);
        await sql`
          insert into migrations
            (name, created_at)
            values (${filename}, current_timestamp)
        `;
      }
    }
  });
}

/**
 * Run a single down migration.
 */
async function actionDown({ rows }) {
  const filename = rows[rows.length - 1]?.name;
  if (!filename) {
    console.log('Nothing to do!');
    return;
  }

  console.log(`Down: ${filename}`);
  // Perform migration in a transaction
  await wrapTransaction('migrate down', async () => {
    await loadMigration(filename).down(sql);
    await sql`delete from migrations where name=${filename}`;
  });
}

/**
 * Print out current migrations state in the db
 */
async function migrationsStatus() {
  const rows = await getMigrationRows();
  if (rows.length) {
    console.log('\nCurrent migration status:');
    console.log(rows.map((r) => `- ${r.name}`).join('\n'));
  } else {
    console.log('migrations empty');
  }
}

/**
 * Get the list of entries in the migrations table
 */
async function getMigrationRows() {
  const data = await sql`SELECT id, name FROM migrations ORDER BY id ASC`;
  return data.rows;
}

/**
 * Ensure the migrations table exists.
 */
async function ensureMigrationsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL,
      name TEXT NOT NULL PRIMARY KEY,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  return await getMigrationRows();
}

async function runCLIAction() {
  const [, , direction] = process.argv;
  const action = actions[direction];

  if (!action) {
    console.error(`Expected ${Object.keys(actions).join(', ')} but got ${direction}`);
    process.exit(1);
  }

  const rows = await ensureMigrationsTable();
  const files = fs.readdirSync(migrationsDir).sort((a, b) => (a > b ? 1 : -1));
  await action({ rows, files });

  console.log(`migration complete`);
  process.exit(0);
}

runCLIAction();
