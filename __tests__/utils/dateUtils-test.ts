import { getDaysOfCurrentMonth } from "../../src/utils/dateUtils";

describe("getCategoryName", () => {
  test("Valid year and month, getDaysOfCurrentMonth, should return correct length array", () => {
    const januaryDaysCount = 31;
    expect(getDaysOfCurrentMonth(2021, 1)).toHaveLength(januaryDaysCount);
  });

  test("Invalid year and month, getDaysOfCurrentMonth, should throw", () => {
    expect(() => getDaysOfCurrentMonth(-1, 51)).toThrow();
  });
});
