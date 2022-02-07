import moment from "moment";
import {
  getCategoryName,
  getTransactionAmountsByDate,
} from "../../src/utils/transactionUtils";

describe("getCategoryName", () => {
  test("Valid string, getCategoryName, should return correct name", () => {
    const res = "Bars & Restaurants";
    expect(getCategoryName("bars_and_restaurants")).toMatch(res);
  });

  test("Invalid string, getCategoryName, should return default option - Unknown", () => {
    const res = "Unknown";
    expect(getCategoryName("baaaaars_and_restaurants")).toMatch(res);
  });

  test("Valid date transactions, getTransactionAmountsByDate, should return correct dictionary", () => {
    const transaction1 = {
      name: "Hatchards",
      status: "completed",
      category: "education",
      carbonFootprint: 40,
      fees: 0,
      type: "card",
      amount: 25,
      currency: "GBP",
      createdAt: "2020-10-22 09:10",
      icon: "https://novus-app-styleguide.s3.eu-west-1.amazonaws.com/banking_icons/education_small.svg",
      brandPartner: "FALSE",
    };
    const transaction2 = {
      ...transaction1,
      name: "Tr2",
      createdAt: "2020-10-20 09:10",
    };
    const transaction3 = {
      ...transaction2,
      createdAt: "2020-10-22 11:11",
    };

    const result = {
      "20/10": 25,
      "22/10": 50,
    };

    expect(
      getTransactionAmountsByDate(moment("2020-10-22"), [
        transaction1,
        transaction2,
        transaction3,
      ]),
    ).toStrictEqual(result);
  });

  test("Invalid date transactions, getTransactionAmountsByDate, should throw error", () => {
    const transaction1 = {
      name: "Hatchards",
      status: "completed",
      category: "education",
      carbonFootprint: 40,
      fees: 0,
      type: "card",
      amount: 25,
      currency: "GBP",
      createdAt: "Wrong Date!",
      icon: "https://novus-app-styleguide.s3.eu-west-1.amazonaws.com/banking_icons/education_small.svg",
      brandPartner: "FALSE",
    };
    const transaction2 = {
      ...transaction1,
      name: "Tr2",
      createdAt: "2020-10-20 09:10",
    };
    const transaction3 = {
      ...transaction2,
      createdAt: "2020-10-22 11:11",
    };

    expect(() =>
      getTransactionAmountsByDate(moment("2020-10-22"), [
        transaction1,
        transaction2,
        transaction3,
      ]),
    ).toThrow();
  });
});
