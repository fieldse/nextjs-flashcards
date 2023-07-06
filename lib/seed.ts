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
        INSERT INTO users (name, email, image, created_at)
        VALUES 
          ('Guillermo Rauch', 'rauchg@vercel.com', 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg', NOW()),
          ('Lee Robinson', 'lee@vercel.com', 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg', NOW()), 
          ('Steven Tey', 'stey@vercel.com', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg', NOW())
        ON CONFLICT (email) DO NOTHING;
      `;

const cardSeeds = sql`
          INSERT INTO cards (id, headword, definition, headword_language, definition_language, created_at)
          VALUES 
            (1, 'apple', '蘋果', 'en', 'zh-CN', NOW()),
            (2, 'mother', '媽媽', 'en', 'zh-CN', NOW()),
            (3, 'horse', '馬', 'en', 'zh-CN', NOW()),
            (4, 'love', '愛', 'en', 'zh-CN', NOW()),
            (5, 'father', '爸爸', 'en', 'zh-CN', NOW()),
            (6, 'teacher', '老師', 'en', 'zh-CN', NOW()),
            (7, 'book', '書', 'en', 'zh-CN', NOW()),
            (8, 'study', '學習', 'en', 'zh-CN', NOW()),
            (9, 'read', '閱讀', 'en', 'zh-CN', NOW()),
            (10, 'write', '些', 'en', 'zh-CN', NOW()),
            (11, 'correct', '對', 'en', 'zh-CN', NOW()),
            (12, 'speak', '說', 'en', 'zh-CN', NOW()),
            (13, 'ask', '問', 'en', 'zh-CN', NOW()),
            (14, 'question', '問題', 'en', 'zh-CN', NOW()),
            (15, 'answer', '答案', 'en', 'zh-CN', NOW()),
            (16, 'friend', '朋友', 'en', 'zh-CN', NOW()),
            (17, 'school', '學校', 'en', 'zh-CN', NOW()),
            (18, 'classmate', '同學', 'en', 'zh-CN', NOW()),
            (19, 'work', '工作', 'en', 'zh-CN', NOW()),
            (20, 'run', '跑步', 'en', 'zh-CN', NOW()),
            (21, 'play', '玩', 'en', 'zh-CN', NOW()),
            (22, 'ball', '球', 'en', 'zh-CN', NOW()),
            (23, 'exercise', '運動', 'en', 'zh-CN', NOW())
          ON CONFLICT (id) DO NOTHING;
      `;

const deckSeeds = sql`
          INSERT INTO decks (id, title, description, created_at)
          VALUES (1, 'Basic deck', 'First words', NOW())
          ON CONFLICT (id) DO NOTHING;

          INSERT INTO decks (id, title, description, created_at)
          VALUES (2, 'School words', 'Word for school', NOW())
          ON CONFLICT (id) DO NOTHING;

          INSERT INTO cards_decks (deck_id, card_id)
          VALUES 
            (1, 1),
            (1, 2),
            (1, 3),
            (1, 4),
            (1, 5),
            (1, 6),
            (1, 7),
            (1, 18),
            (1, 19),
            (1, 20),
            (1, 21),
            (1, 22),
            (1, 23),
            (2, 7),
            (2, 8),
            (2, 9),
            (2, 10),
            (2, 11),
            (2, 12),
            (2, 13),
            (2, 14),
            (2, 15),
            (2, 16),
            (2, 17),
            (2, 18)
          ;
      `;
