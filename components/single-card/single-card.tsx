// Single card view

import { Heading2 } from '@/components/headers';
import { Card } from '@/server/types';
import { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

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
          <Heading2 className="md:text-6xl grow-0"> {card.headword || 'no headword'}</Heading2>

          {/* Definition */}
          <span className={`${hidden ? 'hidden' : ''} flex justify-end`}>
            <span className="">
              <p className="text-2xl">{card.definition || 'no definition'}</p>
              <p className="text-xl">(n.)</p>
            </span>
          </span>

          {/* Next button */}
          <button
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            {/* SHow button */}
            {hidden ? (
              <HiOutlineChevronDoubleRight className="w-12 h-12 " />
            ) : (
              <span className="w-12 h-12 "></span>
            )}
          </button>
        </span>

        {!hidden && (
          <div className="flex relative top-6 justify-around w-full my-8">
            <button className="rounded-md shadow-md p-2 px-4 text-2xl bg-green-500 text-white">
              easy
            </button>
            <button className="rounded-md shadow-md p-2 px-4 text-2xl bg-blue-500 text-white">
              okay
            </button>
            <button className="rounded-md shadow-md p-2 px-4 text-2xl bg-red-600 text-white">
              hard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
