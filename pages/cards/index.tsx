import { CardsTable } from '@/components/cards-table';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';
import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetStaticProps } from 'next';

/**
 * Get a slice of 15 cards, ordered by id
 */
async function getData() {
  const { rows } = await rpc.cards.getAll({ limit: 10 });
  const parsed = JSON.parse(JSON.stringify(rows));
  return { props: { cards: parsed } };
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();
  return { ...data };
};

/**
 * The All Cards overview
 */
export default function CardsPage({ cards }: { cards: Card[] }) {
  return (
    <div className="w-full mt-16">
      <MainHeading>Cards</MainHeading>
      <CardsTable cards={cards} title="All cards" />;
    </div>
  );
}
