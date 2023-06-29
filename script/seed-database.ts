import * as seed from '../lib/seed';
import * as dotenv from 'dotenv';

// Fixme: hardcoded environment variables
function loadEnvSettings() {
  console.log('loading environment settings');
  dotenv.config({ path: './.env.development.local' });
}

async function run() {
  loadEnvSettings();

  console.log('creating & seeding database...');
  try {
    await seed.seed();
  } catch (err) {
    console.log('seed database failed: ', err);
  }
}

run()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
