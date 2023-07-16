// App endpoint urls

type IdType = string | number; // nextjs doesn't strongly type route params.

/**
 * Url for all cards view
 */
const cardsIndex = () => `/cards`;

/**
 * Url for a single card view
 */
const cardItem = (id: IdType) => `/cards/${id}`;

/**
 * Url for all decks view
 */
const decksIndex = () => `/decks`;

/**
 * Url for a single deck view
 */
const deckItem = (id: IdType) => `/decks/${id}`;

/**
 * Url for a single card in a deck
 */
const deckCard = (deckId: IdType, cardId: IdType) => `/decks/${deckId}/card/${cardId}`;

/**
 * Url for all users view
 */
const usersIndex = () => `/users`;

/**
 * Url for a single user view
 */
const userItem = (id: IdType) => `/users/${id}`;

export default {
  cards: {
    index: cardsIndex,
    item: cardItem,
  },
  decks: {
    index: decksIndex,
    item: deckItem,
    deckCard,
  },
  users: {
    index: usersIndex,
    item: userItem,
  },
};
