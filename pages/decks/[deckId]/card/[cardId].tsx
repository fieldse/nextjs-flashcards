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
    const cardIdx = cardIds.indexOf(card.id);
    const nextCardId = cardIds[cardIdx + 1];
    const prevCardId = cardIds[cardIdx - 1];

    const nextUrl = nextCardId ? urls.decks.deckCard(deckId, nextCardId) : null;
    const prevUrl = prevCardId ? urls.decks.deckCard(deckId, prevCardId) : null;

    const data = {
      card: JSON.parse(JSON.stringify(card)),
      nextUrl,
      prevUrl,
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
  nextUrl?: string;
  prevUrl?: string;
};

/**
 * View for single card within deck browse view
 */
export default function DeckCard({ card, ...rest }: Props) {
  return <SingleCard card={card} {...rest} />;
}
