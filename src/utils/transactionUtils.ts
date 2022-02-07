import moment from "moment";
import { Transaction } from "../types";

const categoryNameMap: { [key: string]: string } = {
  education: "Education",
  groceries: "Groceries",
  gifts: "Gifts",
  culture: "Culture",
  fashion: "Fashion",
  transportation: "Transportation",
  home: "Home",
  bars_and_restaurants: "Bars & Restaurants",
  unknown: "Unknown",
};

export const getCategoryName = (value: string): string => {
  return categoryNameMap[value] ?? categoryNameMap.unknown;
};

export const getTransactionAmountsByDate = (
  sameMonthMoment: moment.Moment,
  transactions: Transaction[],
) =>
  transactions.reduce((result: { [key: string]: number }, x) => {
    const transactionDate = moment(x.createdAt, "YYYY-MM-DD");
    if (!transactionDate.isValid()) {
      throw new Error("getTransactionAmountsByDate: createdAt date invalid.");
    }
    const sameMonth = transactionDate.isSame(sameMonthMoment, "month");
    if (!sameMonth) {
      return result;
    }

    if (!result[transactionDate.format("DD/MM")]) {
      result[transactionDate.format("DD/MM")] = x.amount;
    } else {
      result[transactionDate.format("DD/MM")] += x.amount;
    }

    return result;
  }, {});
