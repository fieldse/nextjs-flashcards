// Single card view

import { Heading2 } from '@/components/headers';
import { Card } from '@/server/types';
import { useEffect, useState } from 'react';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { ScoringButtons } from '../buttons';
import { NextButtonArrow, PrevButtonArrow } from '../buttons/navigation-buttons';
import { useRouter } from 'next/router';
import urls from '@/lib/urls';

type Props = {
  card: Card;
  // fixm: urls should have some pre-rendering or checking
  nextCardId?: number | null;
  prevCardId?: number | null;
  showScoreButtons?: boolean;
  showNavigation?: boolean;
};

/**
 * Individual card view, with possibility for browsing and self-scoring
 */
export default function SingleCard({
  card,
  nextCardId,
  prevCardId,
  showScoreButtons = true,
  showNavigation = true,
}: Props) {
  const [showDefinition, setShowDefinition] = useState(false);
  const router = useRouter();

  // FIXME: placeholder
  const partOfSpeech = '(n.)';

  // Go to previous or next card
  const navigateCardAction = (cardId: number) => {
    return () => router.replace(urls.cards.item(cardId));
  };

  // Reset hide definition on route change
  useEffect(() => {
    setShowDefinition(false);
  }, [card.id]);

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex flex-col justify-between">
        <span className="flex flex-row justify-between">
          {/* Previous card nav button */}
          {!!prevCardId && showNavigation && (
            <PrevButtonArrow action={navigateCardAction(prevCardId)} />
          )}

          {/* Title headword */}
          <span className="flex items-center">
            <Heading2 className=" md:text-6xl grow-0">{card.headword || 'no headword'}</Heading2>

            {/* Pronunciation --placeholder  */}
            {showDefinition && <HiOutlineSpeakerWave className="ml-4 w-6 h-6" />}
          </span>

          {/* Definition */}
          <span className={`${!showDefinition ? 'hidden' : ''} flex flex-col justify-center`}>
            <span className="">
              <span className="text-2xl">{card.definition || 'no definition'}</span>
              <span className="ml-2 text-xl">{partOfSpeech}</span>
            </span>
          </span>

          {/* Next card nav button */}
          {!!nextCardId && showNavigation && (
            <NextButtonArrow action={navigateCardAction(nextCardId)} />
          )}
        </span>

        {/* "Show definition" button */}
        {!showDefinition && (
          <button
            type="button"
            className="mt-12 px-6 py-2 bg-gray-400 text-white text-lg grow-0 shrink rounded-md drop-shadow-md shadow-gray-400"
            onClick={() => setShowDefinition(true)}
          >
            Show
          </button>
        )}

        {/* Self-scoring buttons */}
        {showDefinition && showScoreButtons && nextCardId && (
          <ScoringButtons nextCardId={nextCardId} />
        )}
      </div>
    </div>
  );
}
