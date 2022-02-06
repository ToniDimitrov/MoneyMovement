import moment from "moment";
import { Transaction, Section } from "../types";

export const groupTransactionsByDate = (
  transactions: Transaction[],
): Section<Transaction>[] => {
  const result = transactions.reduce(
    (acc: { [key: string]: Transaction[] }, cur: Transaction) => {
      const date = moment(cur.createdAt).format("DD/MM/YYYY");

      if (!acc[date]) {
        acc[date] = [cur];
      } else {
        acc[date].push(cur);
      }

      return acc;
    },
    {},
  );

  return Object.entries(result).map(x => ({
    title: x[0],
    data: x[1],
  }));
};
