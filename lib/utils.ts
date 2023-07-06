import ms from 'ms';

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never';
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? '' : ' ago'}`;
};

/**
 * Return a string stripped of non-alphanumeric characters and kebab-cased (some-word-example)
 */
export const stripKebabCase = (str: string): string => {
  return str
    .replaceAll(/ /g, '-')
    .replaceAll(/[^a-zA-Z0-9/]/g, '')
    .toLowerCase();
};
