import { getCategoryName } from "../../src/utils/transactionUtils";

describe("getCategoryName", () => {
  test("Valid string, getCategoryName, should return correct nam", () => {
    const res = "Bars & Restaurants";
    expect(getCategoryName("bars_and_restaurants")).toMatch(res);
  });

  test("Invalid string, getCategoryName, should return default option - Unknown", () => {
    const res = "Unknown";
    expect(getCategoryName("baaaaars_and_restaurants")).toMatch(res);
  });
});
