// Load settings from env files in expected locations, when we need to
// manually create a postgesql connection

const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

function loadEnvSettings() {
  // FIXME: hardcoded filenames
  const envFilePaths = ['.env.development.local', '.env.development', '.env.local'];

  // Hack: find the first one that exist
  const curDir = process.cwd();
  const fp = envFilePaths.find((p) => fs.existsSync(path.join(curDir, p)));

  if (!fp) {
    throw new Error(`error: no environment file found: directory: ${curDir}`);
  }

  try {
    console.log(`Loading environment settings from ${fp}`);
    dotenv.config({ path: fp });
  } catch (err) {
    throw new Error(`error: failed to load environment file '${fp}': ${err}`);
  }
}

loadEnvSettings();
