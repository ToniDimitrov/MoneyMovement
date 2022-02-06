import { Transaction } from "../../src/types";
import { groupTransactionsByDate } from "../../src/utils/sectionUtils";

describe("groupTransactionsByDate", () => {
  let transaction1: Transaction;
  let transaction2: Transaction;
  let transaction3: Transaction;
  beforeEach(() => {
    transaction1 = {
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
    transaction2 = {
      ...transaction1,
      name: "Tr2",
      createdAt: "2020-10-20 09:10",
    };
    transaction3 = {
      ...transaction2,
      createdAt: "2020-10-22 11:11",
    };
  });

  test("Valid data, groupTransactionsByDate, should categorize items by date", () => {
    const result = [
      { title: "22/10/2020", data: [transaction1, transaction3] },
      { title: "20/10/2020", data: [transaction2] },
    ];

    expect(
      groupTransactionsByDate([transaction1, transaction2, transaction3]),
    ).toStrictEqual(result);
  });

  test("Mixed invalid/valid dates, groupTransactionsByDate, should categorize invalid with empty title", () => {
    const transaction4 = { ...transaction1, createdAt: "Hello there" };
    const transaction5 = { ...transaction1, createdAt: "General Kenobi" };
    const result = [
      { title: "22/10/2020", data: [transaction1, transaction3] },
      { title: "20/10/2020", data: [transaction2] },
      { title: "", data: [transaction4, transaction5] },
    ];

    expect(
      groupTransactionsByDate([
        transaction1,
        transaction2,
        transaction3,
        transaction4,
        transaction5,
      ]),
    ).toStrictEqual(result);
  });

  test("Pass undefined, groupTransactionsByDate, should throw", () => {
    // @ts-ignore
    expect(() => groupTransactionsByDate(undefined)).toThrow();
  });
});
