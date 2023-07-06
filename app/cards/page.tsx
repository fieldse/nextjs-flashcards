'use server';
import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from '.';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';

/**
 * The All Cards overview
 */
export default async function Cards() {
  return (
    <MainWrapper>
      <MainHeading>Cards</MainHeading>
      <Suspense fallback={<CardsTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <CardsTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </MainWrapper>
  );
}
