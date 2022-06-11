import { describe, expect, it } from "vitest";
import { add } from "./math";

describe("Math", () => {
  // Arrange
  let numbers = [1, 2];
  let expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);

  it("should summarize all number values in array", () => {
    // Act
    const result = add(numbers);
    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should give a NaN result", () => {
    const inputs = ["invalid", 1];
    const result = add(inputs);
    const expectedResult = inputs.reduce((prev, curr) => prev + curr, 0);
    expect(result).toBeNaN(expectedResult);
  });

  it("should yield a correct sum for array with string values", () => {
    const inputs = ["3", "4", "5"];
    const result = add(inputs);
    const expectedResult = inputs.reduce(
      (prev, curr) => parseInt(prev) + parseInt(curr),
      0
    );
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is passed", () => {
    const inputs = [];
    const result = add(inputs);
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };
    expect(resultFn).toThrow(/is not iterable/);
  });

  it("should not throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add([1, 2]);
    };
    expect(resultFn).not.toThrow();
  });

  it("should throw an error if provided with multiple args instead", () => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => {
      add(num1, num2);
    };
    expect(resultFn).toThrow(/is not iterable/);
  });

});
