/**
 * Converts a number to a string with the specified number of decimals
 * @param {number | string} value Number to be converted
 * @param {number } decimals Number of decimals
 * @returns {number}
 * @summary Resolves the problem of floating point numbers in JavaScript
 * @see https://0.30000000000000004.com/
 * @example
 *  toDecimals(0.2 + 0.1, 0) // 3.1415
 *  toDecimals(3.14159265359, 2) // 3.14
 */
declare const toDecimals: (value: string | number, decimals: number) => number;
/**
 * Converts a BRL value to cents
 * @param value BRL value
 * @returns {number} BRL value in cents
 * @summary Resolves the problem of floating point numbers in JavaScript
 * @see https://0.30000000000000004.com/
 * @example
 * brlToCents(40) // 4000
 * brlToCents(3.5) // 350
 */
declare const brlToCents: (value: string | number) => number;
export { brlToCents, toDecimals };
