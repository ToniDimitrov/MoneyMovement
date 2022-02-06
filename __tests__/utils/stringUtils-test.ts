import { Transaction } from "../../src/types";
import { groupTransactionsByDate } from "../../src/utils/sectionUtils";
import { toTitleCase } from "../../src/utils/stringUtils";

describe("toTitleCase", () => {
  test("One word, toTitleCase, should capitalize given word", () => {
    const res = "Capitalize";
    expect(toTitleCase("capitalize")).toMatch(res);
  });

  test("Normal word, toTitleCase, should capitalize each separate word", () => {
    const res = "Should Be Capitalized";
    expect(toTitleCase("should be Capitalized")).toMatch(res);
  });

  test("Snake case input, toTitleCase, should capitalize only first letter", () => {
    const res = "Should_be_capitalized";
    expect(toTitleCase("should_be_Capitalized")).toMatch(res);
  });
  test("Emtpy input, toTitleCase, should return empty", () => {
    const res = "";
    expect(toTitleCase("")).toMatch(res);
  });
});
