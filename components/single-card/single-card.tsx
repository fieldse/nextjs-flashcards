// Single card view

import { Heading2 } from '@/components/headers';
import { Card } from '@/server/types';
import { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';

export default function SingleCard({ card }: { card: Card }) {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    console.log('inside SingleCard: ', JSON.stringify(card, null, 2));
  });
  console.log(`card: `, card);
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex flex-col justify-between">
        <span className="flex flex-row justify-between">
          {/* Title headword */}
          <span className="flex items-center">
            <Heading2 className=" md:text-6xl grow-0">{card.headword || 'no headword'}</Heading2>
            {!hidden && <HiOutlineSpeakerWave className="ml-4 w-6 h-6" />}
          </span>

          {/* Next button */}
          <button
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            {/* Icon */}
            {hidden && <HiOutlineChevronDoubleRight className="w-12 h-12 " />}
          </button>

          {/* Definition */}
          <span className={`${hidden ? 'hidden' : ''} flex justify-end`}>
            <span className="">
              <span className="text-2xl">{card.definition || 'no definition'}</span>
              <span className="ml-2 text-xl">(n.)</span>
            </span>
          </span>
        </span>

        {/* Scoring button */}
        {!hidden && (
          <div className="flex relative top-6 justify-around w-full my-8">
            <button className="rounded-md shadow-lg shadow-gray-400 drop-shadow-lg p-2 px-4 text-2xl bg-green-500 text-white">
              easy
            </button>
            <button className="rounded-md shadow-lg   shadow-gray-400 drop-shadow-lg  p-2 px-4 text-2xl bg-blue-500 text-white">
              okay
            </button>
            <button className="rounded-md shadow-lg shadow-gray-400 drop-shadow-lg  p-2 px-4 text-2xl bg-red-600 text-white">
              hard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
