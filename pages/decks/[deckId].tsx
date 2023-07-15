import { CardsTable } from '@/components/cards-table';
import { MainHeading } from '@/components/headers';
import * as rpc from '@/rpc';
import { Card, Deck } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import URLS from '@/lib/urls';
import { logDebug } from '@/lib/utils';

/**
 * Get deck details and cards
 */
async function getDeckData(deckId: number) {
  try {
    const data = await rpc.decks.getDeckCards(deckId);
    const parsed = JSON.parse(JSON.stringify(data));
    return { props: { ...parsed } };
  } catch (err) {
    throw err;
  }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { deckId } = ctx.params;
  const data = await getDeckData(deckId);
  return { ...data };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allDeckIds = await rpc.decks.getAllIDs();
  const deckPaths = allDeckIds.map((id) => URLS.decks.item(id));

  const cardIds = await rpc.decks.getAllDeckCardIds();
  const cardPaths = cardIds.rows.map(({ cardId, deckId }) => URLS.decks.deckCard(deckId, cardId));
  logDebug(`=== (getStaticPaths) data:`, cardIds.rows);
  logDebug(`=== (getStaticPaths) cardPaths:`, cardPaths);

  return {
    paths: [...deckPaths, ...cardPaths],
    fallback: false,
  };
};

type Props = {
  deck: Deck;
  cards: Card[];
};

/**
 * Single deck browse view
 */
export default function DeckPage({ cards, deck }: Props) {
  return (
    <div className="w-full mt-16">
      <MainHeading>{deck.title}</MainHeading>
      <CardsTable cards={cards} />;
    </div>
  );
}
