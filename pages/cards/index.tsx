'use server';
import { Suspense } from 'react';
import { CardsTable, CardsTablePlaceholder } from '@/components/cards-table';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';
import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetStaticProps } from 'next';

/**
 * Get a slice of 15 cards, ordered by id
 */
async function getData(): Promise<{ cards: Card[] }> {
  const data = await rpc.cards.getAll({ limit: 15 });
  return {
    cards: JSON.parse(JSON.stringify(data.rows)),
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();
  return { props: { ...data } };
};

/**
 * The All Cards overview
 */
export default async function CardsPage({ cards }: { cards: Card[] }) {
  return (
    <MainWrapper>
      <MainHeading>Cards</MainHeading>
      <CardsTable cards={cards} />;
      <SubFooter />
      <VercelFooter />
    </MainWrapper>
  );
}
