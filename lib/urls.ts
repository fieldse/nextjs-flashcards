// App endpoint urls

/**
 * Url for all cards view
 */
const cardsIndex = () => `/cards`;

/**
 * Url for a single card view
 */
const cardItem = (id: string | number) => `/cards/${id}`;

/**
 * Url for all decks view
 */
const decksIndex = () => `/decks`;

/**
 * Url for a single deck view
 */
const deckItem = (id: string | number) => `/decks/${id}`;

/**
 * Url for all users view
 */
const usersIndex = () => `/users`;

/**
 * Url for a single user view
 */
const userItem = (id: string | number) => `/users/${id}`;

export default {
  cards: {
    index: cardsIndex,
    item: cardItem,
  },
  decks: {
    index: decksIndex,
    item: deckItem,
  },
  users: {
    index: usersIndex,
    item: userItem,
  },
};
