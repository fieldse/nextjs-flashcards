// Buttons for self-scoring on a review session

/**
 * Set of three buttons for self-scoring on a review session
 *  Easy / Okay / Hard
 */
export function ScoringButtons({ nextCardId }: { nextCardId: number }) {
  return (
    <div className="flex relative top-6 justify-around w-full my-8">
      <a href={`/card/${nextCardId}`}>
        <button className="rounded-md shadow-lg shadow-gray-400 drop-shadow-lg p-2 px-4 text-2xl bg-green-500 text-white">
          easy
        </button>
      </a>
      <a href={`/card/${nextCardId}`}>
        <button className="rounded-md shadow-lg   shadow-gray-400 drop-shadow-lg  p-2 px-4 text-2xl bg-blue-500 text-white">
          okay
        </button>
      </a>
      <a href={`/card/${nextCardId}`}>
        <button className="rounded-md shadow-lg shadow-gray-400 drop-shadow-lg  p-2 px-4 text-2xl bg-red-600 text-white">
          hard
        </button>
      </a>
    </div>
  );
}
