import SingleCard from '@/components/single-card/single-card';
import { Card } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as rpc from '@/rpc';
import urls from '@/lib/urls';

type SingleCardProps = {
  card: Card;
  nextCardId: number | null;
  prevCardId: number | null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCardIds = await rpc.cards.getAllIDs();
  return {
    paths: allCardIds.map((id) => urls.cards.item(id)),
    fallback: false,
  };
};

// fetch current card details, and IDs of prev/next cards
async function getData(id: string): Promise<SingleCardProps> {
  const card = await rpc.cards.get(id); // get the individual card

  if (!card) {
    throw new Error(`failed to get card data: card_id: ${id}`);
  }
  // get all cards to check if we have a next card ID
  const allCardIds = await rpc.cards.getAllIDs();

  // Prev/next cards, if existing
  const nextCardId = allCardIds.find((x) => x === card.id + 1) || null; // null for allowing JSON serialization
  const prevCardId = allCardIds.find((x) => x === card.id - 1) || null;
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
