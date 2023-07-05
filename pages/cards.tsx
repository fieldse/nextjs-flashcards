import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from '@/components/cards';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';

export const runtime = 'edge';
export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

/**
 * The main page of the app
 */
export function Cards() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <MainHeading title="Cards" />
      <Suspense fallback={<CardsTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <CardsTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </main>
  );
}
