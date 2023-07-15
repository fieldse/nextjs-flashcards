import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import SingleCard from '@/components/single-card/single-card';
import urls from '@/lib/urls';

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { deckId, cardId } = ctx.params;
  try {
    const cardIds = await rpc.decks.getDeckCardIds(deckId);
    const card = await rpc.cards.get(cardId);

    // Prev/next cards, if existing
    const cardIdx = cardIds.indexOf(cardId);
    const nextCardId = cardIds[cardIdx + 1] || null;
    const prevCardId = cardIds[cardIdx - 1] || null;

    const data = {
      card: JSON.parse(JSON.stringify(card)),
      nextCardId,
      prevCardId,
    };
    return { props: data };
  } catch (err) {
    console.log(`getStaticProps: error: ${err}`);
    return { props: { hasError: true } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cardIds = await rpc.decks.getAllDeckCardIds();
  const cardPaths = cardIds.rows.map((r) => urls.decks.deckCard(r.deckId, r.cardId));

  return {
    paths: [...cardPaths],
    fallback: false,
  };
};

type Props = {
  card: Card;
  nextCardId: number;
  prevCardId: number;
};

/**
 * View for single card within deck browse view
 */
export default function DeckCard({ card, nextCardId, prevCardId }: Props) {
  return <SingleCard card={card} nextCardId={nextCardId} prevCardId={prevCardId} />;
}
