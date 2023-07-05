import { Cards } from '@/pages/cards';
import { HomePage } from '@/pages/home';
import Users from '@/pages/users';

export const runtime = 'edge';
export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

/**
 * The main page of the app
 */
export default function MainPage() {
  // placeholder for routing
  // const currentPage: 'home' | 'cards' | 'decks' | 'users' = 'home';

  return <HomePage />;
}
