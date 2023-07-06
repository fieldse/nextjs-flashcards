import SingleCard from '@/components/single-card/single-card';
import { Card } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as rpc from '@/rpc';

// Returns a single card view
export const getStaticPaths: GetStaticPaths = async () => {
  const allCards = await rpc.cards.getAll({ limit: 50 });
  return {
    paths: allCards.rows.map((card) => `/card/${card.id}`),
    fallback: true,
  };
};

async function getData(id: string): Promise<{ card: Card }> {
  const data = await rpc.cards.get(id);
  console.log(`=== debug: data: `, JSON.stringify(data, null, 2));
  if (!data) {
    throw new Error(`failed to get card data: card_id: ${id}`);
  }
  return {
    card: JSON.parse(JSON.stringify(data)),
  };
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  if (!id) {
    return {
      props: { hasError: true },
    };
  }
  const data = await getData(id);
  if (!data) {
    return {
      props: { hasError: true },
    };
  }
  const { card } = data;
  return { props: { card } };
};

/**
 * View for a single card page
 */
export default function SingleCardPage({ card }: { card: Card }) {
  return <SingleCard card={card} />;
}
