// Load settings from env files in expected locations, when we need to
// manually create a postgesql connection

const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const DEBUG = true; // FIXME: remove debugs

function loadEnvSettings() {
  // FIXME: hardcoded filenames
  const envFilePaths = ['.env.local', '.env.development.local', '.env.development'];

  // Hack: find the first one that exist
  const curDir = process.cwd();
  const fp = envFilePaths.find((p) => fs.existsSync(path.join(curDir, p)));

  if (!fp) {
    throw new Error(`error: no environment file found: directory: ${curDir}`);
  }

  try {
    dotenv.config({ path: fp });
    console.log(`loaded environment file: ${fp}`);
  } catch (err) {
    throw new Error(`error: failed to load environment file '${fp}': ${err}`);
  }
}

loadEnvSettings();

// FIXME: debugging, -- delete me
if (DEBUG) {
  console.log(`=== debug: environment settings`);
  ['POSTGRES_USER', 'POSTGRES_HOST', 'POSTGRES_PORT', 'POSTGRES_DATABASE'].map((k) => {
    const v = process.env[k];
    console.log(`=== debug: ${k}: ${v}`);
  });
}
