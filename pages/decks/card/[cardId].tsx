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

type Props = {
  card: Card;
};

/**
 * View for single card within deck browse view
 */
export default function DeckCard({ card }: Props) {
  return <SingleCard card={card} />;
}
