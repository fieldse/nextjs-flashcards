import SingleCard from '@/components/single-card/single-card';
import { Card } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as rpc from '@/rpc';

type SingleCardProps = {
  card: Card;
  nextCardId: number | null;
  prevCardId: number | null;
};

const getAllCards = async () => {
  return await rpc.cards.getAll({ limit: 1000 }); // fixme: card limits
};

// Returns a single card view
export const getStaticPaths: GetStaticPaths = async () => {
  const allCards = await getAllCards();
  return {
    paths: allCards.rows.map((card) => `/card/${card.id}`),
    fallback: true,
  };
};

async function getData(id: string): Promise<SingleCardProps> {
  const card = await rpc.cards.get(id); // get the individual card

  // get all cards to check if we have a next card ID
  const allCards = await getAllCards();

  // Prev/next cards, if existing
  const nextCardId = allCards.rows.find((x) => x.id === card.id + 1)?.id || null; // null for allowing JSON serialization
  const prevCardId = allCards.rows.find((x) => x.id === card.id - 1)?.id || null;

  console.log(`=== debug: data: `, JSON.stringify(card, null, 2));
  if (!card) {
    throw new Error(`failed to get card data: card_id: ${id}`);
  }
  return {
    card: JSON.parse(JSON.stringify(card)),
    nextCardId,
    prevCardId,
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
  if (!data.card) {
    return {
      props: { hasError: true },
    };
  }
  return { props: { ...data } };
};

/**
 * View for a single card page
 */
export default function SingleCardPage({ card, nextCardId, prevCardId }: SingleCardProps) {
  return <SingleCard card={card} nextCardId={nextCardId} prevCardId={prevCardId} />;
}
