import { describe, it, expect } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("Validation", () => {
  describe("validateStringNotEmpty()", () => {
    it("should validate the length of string must not be empty", () => {
      const emptyString = "";
      const validateStringNotEmptyFn = () => {
        validateStringNotEmpty(emptyString);
      };
      expect(validateStringNotEmptyFn).toThrowError(/must not be empty./);
    });

    it("should validate a string", () => {
      const input = "invalid";
      const validateStringNotEmptyFn = () => {
        validateStringNotEmpty(NaN);
      };
      expect(validateStringNotEmptyFn).toThrowError(
        /value.trim is not a function/
      );
    });

    it("validateStringNotEmpty function should throw an error", () => {
      const validateStringNotEmptyFn = () => {
        validateStringNotEmpty();
      };
      expect(validateStringNotEmptyFn).toThrowError();
    });
  });

  describe("validateNumber()", () => {
    it("should throw an error if non numeric value is provided", () => {
      const input = "a";
      const validateNumberFn = () => {
        validateNumber(input);
      };
      expect(validateNumberFn).toThrow();
    });

    it("should throw an error validating a number with NaN", () => {
      const input = "a";
      const validateNumberFn = () => {
        validateNumber(input);
      };
      expect(validateNumberFn).toThrowError(/Invalid number input/);
    });

    it("validateNumber function should throw an error", () => {
      const validateNumberFn = () => {
        validateNumber();
      };
      expect(validateNumberFn).toThrowError();
    });
  });
});
