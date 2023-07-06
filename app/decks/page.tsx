'use server';
import { Suspense } from 'react';
import { DecksTable } from '.';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';

/**
 * The Decks overview page
 */
export default async function Decks() {
  return (
    <MainWrapper>
      <MainHeading>Decks</MainHeading>
      <Suspense
        fallback={<div className="text-gray-500 p-12 my-6 text-center">Loading data...</div>}
      >
        {/* @ts-expect-error Async Server Component */}
        <DecksTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </MainWrapper>
  );
}
