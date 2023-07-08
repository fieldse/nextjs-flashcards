// App endpoint urls

/**
 * Url for all cards view
 */
export const cardsList = () => `/cards`;

/**
 * Url for a single card view
 */
export const cardItem = (id: string | number) => `/cards/${id}`;

/**
 * Url for all decks view
 */
export const decksList = () => `/decks`;

/**
 * Url for a single deck view
 */
export const deckItem = (id: string | number) => `/decks/${id}`;

/**
 * Url for all users view
 */
export const usersList = () => `/users`;

/**
 * Url for a single user view
 */
export const userItem = (id: string | number) => `/users/${id}`;
