import { expect, test } from 'vitest'
import { sum } from './sum'

test('should sum up correctly', () => {
    expect(sum(1, 2)).toBe(3)
})