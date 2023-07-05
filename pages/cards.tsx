import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from '@/components/cards';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';

/**
 * The Cards view
 */
export default function Cards() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <MainHeading>Cards</MainHeading>
      <Suspense fallback={<CardsTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <CardsTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </main>
  );
}
