import * as seed from "../lib/seed";

async function run() {
  console.log("creating & seeding database...");
  try {
    await seed.seed();
  } catch (err) {
    console.log("seed database failed: ", err);
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
