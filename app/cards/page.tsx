'use server';
import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from '@/components/cards-table';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';
import * as rpc from '@/rpc';
import { Card } from '@/server/types';

async function getData(): Promise<{ cards: Card[] }> {
  const data = await rpc.cards.getAll({ limit: 15 });
  return {
    cards: data.rows,
  };
}

/**
 * The All Cards overview
 */
export default async function CardsPage() {
  const { cards } = await getData();

  return (
    <MainWrapper>
      <MainHeading>Cards</MainHeading>
      <Suspense fallback={<CardsTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <AllCards />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </MainWrapper>
  );
}

/**
 * Wrapps Cards with a data fetch
 */
async function AllCards() {
  const data = await getData();
  if (!data) {
    return null;
  }
  return <CardsTable cards={data.cards} />;
}
