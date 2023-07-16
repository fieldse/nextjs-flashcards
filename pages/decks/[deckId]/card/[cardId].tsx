import * as rpc from '@/rpc';
import { Card, Deck } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import urls from '@/lib/urls';
import SingleCard from '@/components/single-card/single-card';
import CardBackground from '@/components/card-background';
import { HomeButton } from '@/components/buttons/navigation-buttons';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { deckId, cardId } = ctx.params;
  try {
    const cardIds = await rpc.decks.getDeckCardIds(deckId);
    const card = await rpc.cards.get(cardId);
    const deck = await rpc.decks.get(deckId);

    // Prev/next cards, if existing
    const cardIdx = cardIds.indexOf(card.id);
    const nextCardId = cardIds[cardIdx + 1];
    const prevCardId = cardIds[cardIdx - 1];

    const nextUrl = nextCardId ? urls.decks.deckCard(deckId, nextCardId) : null;
    const prevUrl = prevCardId ? urls.decks.deckCard(deckId, prevCardId) : null;

    const data = {
      card,
      deck,
      nextUrl,
      prevUrl,
    };
    return { props: JSON.parse(JSON.stringify(data)) };
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

/**
 * View for single card within deck browse view
 */
export default function DeckCard({
  card,
  deck,
  ...rest
}: {
  card: Card;
  deck: Deck;
  nextUrl?: string;
  prevUrl?: string;
}) {
  const deckUrl = urls.decks.item(deck.id);
  return (
    <>
      <span className="relative bottom-20">
        <Link href={deckUrl} title={deckUrl}>
          <HomeButton size={10} className="text-gray-600 text-lg">
            Deck: {deck.title}
          </HomeButton>
        </Link>
      </span>
      <CardBackground>
        <SingleCard card={card} {...rest} />
      </CardBackground>
    </>
  );
}
