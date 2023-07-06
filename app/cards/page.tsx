'use server';
import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from '.';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';

/**
 * The All Cards overview
 */
export default async function Cards() {
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
