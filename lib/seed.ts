import { sql, wrapTransaction } from './migrate/db';

export async function seed() {
  console.log('Seeding users...');
  await wrapTransaction('seed users', async () => await userSeeds);

  console.log('Seeding cards...');
  await wrapTransaction('seed cards', async () => await cardSeeds);

  console.log('Seeding decks...');
  await wrapTransaction('seed decks', async () => await deckSeeds);
}

const userSeeds = sql`
        INSERT INTO users (name, email, image)
        VALUES 
          ('Guillermo Rauch', 'rauchg@vercel.com', 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg'),
          ('Lee Robinson', 'lee@vercel.com', 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg'), 
          ('Steven Tey', 'stey@vercel.com', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg')
        ON CONFLICT (email) DO NOTHING;
      `;

const cardSeeds = sql`
          INSERT INTO cards (id, headword, definition, headword_language, definition_language)
          VALUES 
            (1, 'apple', '蘋果', 'en', 'zh-CN'),
            (2, 'mother', '媽', 'en', 'zh-CN'),
            (3, 'horse', '馬', 'en', 'zh-CN'),
            (4, 'love', '愛', 'en', 'zh-CN')
          ON CONFLICT (id) DO NOTHING;
      `;

const deckSeeds = sql`
          INSERT INTO decks (id, title, description)
          VALUES (1, 'Basic deck', 'First four words')
          ON CONFLICT (id) DO NOTHING;
      `;
