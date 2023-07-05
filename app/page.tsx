import { Home } from '@/pages/home';

export const runtime = 'edge';
export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

/**
 * The main page of the app
 */
export default function MainPage() {
  return <Home />;
}
