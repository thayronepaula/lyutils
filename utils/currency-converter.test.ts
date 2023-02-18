import { describe, expect, it } from 'vitest'
import { toDecimals, brlToCents } from './currency-converter'

describe('toDecimals', () => {
  it('should converts a number to decimals without problems with floating point numbers', () => {
    const input = 0.2 + 0.1 // 0.30000000000000004
    const expected = 0.3
    const decimals = 1

    const result = toDecimals(input, decimals)
    expect(result).toBe(expected)
  })

  it('should remove N decimals from a number', () => {
    const input = 3.50123456789
    const expected = 3.5
    const decimals = 2

    const result = toDecimals(input, decimals)
    expect(result).toBe(expected)
  })

  it('should remove float point when decimais is 0', () => {
    const input = 47.14159265359
    const expected = 47
    const decimals = 0

    const result = toDecimals(input, decimals)
    expect(result).toBe(expected)
  })
})

describe('brlToCents', () => {
  it('should converts a integer BRL value to cents', () => {
    const input = 40 // -> represents R$ 40,00
    const expected = 4000 // 40 * 100

    const result = brlToCents(input)
    expect(result).toBe(expected)
  })

  it('should converts a float BRL value to cents', () => {
    const input = 3.5 // -> represents R$ 3,50
    const expected = 350 // 3.5 * 100

    const result = brlToCents(input)
    expect(result).toBe(expected)
  })
})
