import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from '@/components/cards';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';

/**
 * The main page of the app
 */
export function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <MainHeading title="Flashcards app" />
      <Suspense fallback={<CardsTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <CardsTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </main>
  );
}
