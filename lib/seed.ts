import { sql, wrapTransaction } from './db';

export async function seed() {
  console.log('Seeding users...');
  await wrapTransaction('seed users', async () => {
    await Promise.all(userSeeds);
  });
  console.log(`OK -- seeded ${userSeeds.length} users`);

  console.log('Seeding cards...');
  await wrapTransaction('seed cards', async () => {
    await Promise.all(cardSeeds);
  });
  console.log(`OK -- seeded ${cardSeeds.length} cards`);

  console.log('Seeding decks...');
  await wrapTransaction('seed decks', async () => {
    await Promise.all(deckSeeds);
  });
  console.log(`OK -- seeded ${deckSeeds.length} decks`);
}

const userSeeds = [
  sql`
          INSERT INTO users (name, email, image)
          VALUES ('Guillermo Rauch', 'rauchg@vercel.com', 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
  sql`
          INSERT INTO users (name, email, image)
          VALUES ('Lee Robinson', 'lee@vercel.com', 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
  sql`
          INSERT INTO users (name, email, image)
          VALUES ('Steven Tey', 'stey@vercel.com', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg')
          ON CONFLICT (email) DO NOTHING;
      `,
];

const cardSeeds = [
  sql`
          INSERT INTO cards (id, headword, definition, headword_language, definition_language)
          VALUES (1, 'apple', '蘋果', 'en', 'zh-CN')
          ON CONFLICT (id) DO NOTHING;
      `,
  sql`
          INSERT INTO cards (id, headword, definition, headword_language, definition_language)
          VALUES (2, 'mother', '媽', 'en', 'zh-CN')
          ON CONFLICT (id) DO NOTHING;
      `,
  sql`
          INSERT INTO cards (id, headword, definition, headword_language, definition_language)
          VALUES (3, 'horse', '馬', 'en', 'zh-CN')
          ON CONFLICT (id) DO NOTHING;
      `,
  sql`
          INSERT INTO cards (id, headword, definition, headword_language, definition_language)
          VALUES (4, 'love', '愛', 'en', 'zh-CN')
          ON CONFLICT (id) DO NOTHING;
      `,
];

const deckSeeds = [
  sql`
          INSERT INTO decks (id, title, description)
          VALUES (1, 'Basic deck', 'First four words')
          ON CONFLICT (id) DO NOTHING;
      `,
];
