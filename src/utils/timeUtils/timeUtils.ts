/**
 * Converts seconds to milliseconds.
 * @param {number} sec - The number of seconds.
 * @returns {number} The equivalent time in milliseconds.
 */
export const seconds = (sec: number): number => sec * 1000;

/**
 * Converts minutes to milliseconds.
 * @param {number} min - The number of minutes.
 * @returns {number} The equivalent time in milliseconds.
 */
export const minutes = (min: number): number => min * 60 * 1000;
