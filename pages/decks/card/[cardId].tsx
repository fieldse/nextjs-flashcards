import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { logDebug } from '@/lib/utils';
import SingleCard from '@/components/single-card/single-card';
import URLS from '@/lib/urls';

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { cardId } = ctx.params;
  logDebug(`=== (card) getStaticProps: cardId`, cardId);
  try {
    const data = await await rpc.cards.get(cardId);
    const parsed = JSON.parse(JSON.stringify(data));
    logDebug(`=== (card) getStaticProps: data`, JSON.stringify(parsed, null, 2));
    return { props: { card: parsed } };
  } catch (err) {
    console.log(`getStaticProps: error: ${err}`);
    return { props: { hasError: true } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  logDebug(`=== (getStaticPaths)`);
  const data = await rpc.decks.getAllDeckCardIds();
  logDebug(`=== (getStaticPaths) data:`, data.rows);
  const paths = data.rows.map(({ cardId, deckId }) => URLS.decks.deckCard(deckId, cardId));
  logDebug(`=== (getStaticPaths) paths:`, paths);
  return {
    paths,
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
