import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import SingleCard from '@/components/single-card/single-card';

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { cardId } = ctx.params;
  try {
    const data = await await rpc.cards.get(cardId);
    const parsed = JSON.parse(JSON.stringify(data));
    return { props: { card: parsed } };
  } catch (err) {
    console.log(`getStaticProps: error: ${err}`);
    return { props: { hasError: true } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cardIds = await rpc.decks.getAllDeckCardIds();
  const cardPaths = cardIds.rows.map((r) => `/decks/${r.deckId}/card/${r.cardId}`);

  return {
    paths: [...cardPaths],
    fallback: false,
  };
};

type Props = {
  card: Card;
};

/**
 * View for single card within deck browse view
 */
export default function DeckCard({ card }: Props) {
  return <SingleCard card={card} />;
}
