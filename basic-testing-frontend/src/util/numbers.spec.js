import { describe, it, expect } from 'vitest';
import { transformToNumber } from './numbers';

describe("Numbers", () => {
  it("should transform a string number to number of type number", () => {
    const input = '12';
    const result = transformToNumber(input);
    expect(result).toBe(12).toBeTypeOf('number');
  });
  it("should transform a string number to number", () => {
    const input = '1';
    const result = transformToNumber(input);
    expect(result).toBe(+input);
  });
  it("should yield NaN for non-transformable number", () => {
    const input = 'invalid';
    const inputObject = {};
    const result = transformToNumber(input);
    const resultObject = transformToNumber(inputObject);
    expect(result).toBe(NaN);
    expect(resultObject).toBe(NaN);
  });
});
