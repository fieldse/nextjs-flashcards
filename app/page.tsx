import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from './cards';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';

/**
 * The main page of the app
 */
export default function MainPage() {
  // placeholder for routing
  // const currentPage: 'home' | 'cards' | 'decks' | 'users' = 'home';

  return (
    <MainWrapper>
      <MainHeading>Flashcards app</MainHeading>
      <Suspense fallback={<CardsTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <CardsTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </MainWrapper>
  );
}
