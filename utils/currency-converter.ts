const baseConverter = (
  value: string | number,
  decimals: number,
  isBRL = false
) => {
  const newValueStr = value.toString()
  const [int, decimal] = newValueStr.split('.')
  const parsedDecimal = decimal
    ? decimal.substring(0, decimals).padEnd(decimals, '0')
    : '00'

  return isBRL ? `${int}${parsedDecimal}` : `${int}.${parsedDecimal}`
}

/**
 * Converts a number to decimals without problems with floating point numbers
 * @param {number | string} value Number to be converted
 * @param {number } decimals Number of decimals
 * @returns {number}
 * @summary Resolves the problem of floating point numbers in JavaScript
 * @see https://0.30000000000000004.com/
 * @example
 *  toDecimals(0.2 + 0.1, 1) // 0.3 
 *  toDecimals(3.14159265359, 2) // 3.14
 */
const toDecimals = (value: string | number, decimals: number): number =>
  parseFloat(baseConverter(value, decimals))

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
const brlToCents = (value: string | number): number =>
  parseInt(baseConverter(value, 2, true))

export { brlToCents, toDecimals }
