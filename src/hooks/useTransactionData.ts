import moment from "moment";
import { useMemo } from "react";
import { Transaction } from "../types";
import { toTitleCase } from "../utils/stringUtils";
import { getCategoryName } from "../utils/transactionUtils";

export const useTransactionData = (transaction: Transaction) => {
  return useMemo(() => {
    const category = getCategoryName(transaction.category);
    const amount = transaction.amount.toLocaleString(undefined, {
      style: "currency",
      currency: transaction.currency,
    });
    const fee = transaction.fees.toLocaleString(undefined, {
      style: "currency",
      currency: transaction.currency,
    });
    const carbonFootprint = `${transaction.carbonFootprint} CO2e`;
    const status = toTitleCase(transaction.status);
    const type = toTitleCase(transaction.type);
    const createdTime = moment(transaction.createdAt).format("HH:mm");

    return {
      category,
      amount,
      carbonFootprint,
      fee,
      status,
      type,
      createdTime,
    };
  }, [transaction]);
};
