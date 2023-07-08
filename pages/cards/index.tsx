'use server';
import { CardsTable } from '@/components/cards-table';
import { MainHeading } from '@/components/headers';
import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetStaticProps } from 'next';
import { logDebug } from '@/lib/utils';

/**
 * Get a slice of 15 cards, ordered by id
 */
async function getData(): Promise<{ cards: Card[] }> {
  logDebug('(cardsIndex -- getData)');
  try {
    const data = await rpc.cards.getAll({ limit: 15 });
    logDebug('(cardsIndex -- getData) data: ', JSON.stringify(data, null, 2));
    return {
      cards: data.rows,
    };
  } catch (err) {
    logDebug('(cardsIndex -- getData) error:', JSON.stringify(err));
    throw err;
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();
  return { props: { ...data } };
};

/**
 * The All Cards overview
 */
export default async function CardsPage(props: { cards: Card[] }) {
  logDebug('(cardsPage) props: ', props);
  return (
    <div id="content">
      <MainHeading>Cards</MainHeading>
      {/* <CardsTable cards={cards} />; */}
    </div>
  );
}
