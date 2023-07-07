// Single card view

import { Heading2 } from '@/components/headers';
import { Card } from '@/server/types';
import { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { ScoringButtons } from '../buttons';
import { NextButtonArrow, NextButtonDoubleArrow } from '../buttons/navigation-buttons';

export default function SingleCard({ card }: { card: Card }) {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    console.log('inside SingleCard: ', JSON.stringify(card, null, 2));
  });
  console.log(`card: `, card);
  const partOfSpeech = '(n.)'; // FIXME: placeholder
  const nextCardId = card.id + 1;
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex flex-col justify-between">
        <span className="flex flex-row justify-between">
          {/* Title headword */}
          <span className="flex items-center">
            <Heading2 className=" md:text-6xl grow-0">{card.headword || 'no headword'}</Heading2>

            {/* Pronunciation --placeholder  */}
            {!hidden && <HiOutlineSpeakerWave className="ml-4 w-6 h-6" />}
          </span>

          {/* Next button */}
          {hidden && <NextButtonArrow action={() => setHidden(!hidden)} />}

          {/* Definition */}
          <span className={`${hidden ? 'hidden' : ''} flex flex-col justify-center`}>
            <span className="">
              <span className="text-2xl">{card.definition || 'no definition'}</span>
              <span className="ml-2 text-xl">{partOfSpeech}</span>
            </span>
          </span>
        </span>

        {/* Scoring button */}
        {!hidden && <ScoringButtons nextCardId={nextCardId} />}
      </div>
    </div>
  );
}
