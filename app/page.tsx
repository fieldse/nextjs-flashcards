import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from './cards';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';

/**
 * The main page of the app
 */
export default function MainPage() {
  // placeholder for routing
  // const currentPage: 'home' | 'cards' | 'decks' | 'users' = 'home';

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <MainHeading>Flashcards app</MainHeading>
      <Suspense fallback={<CardsTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <CardsTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </main>
  );
}
