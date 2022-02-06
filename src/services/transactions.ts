import moment from "moment";
import { Transaction, TransactionDTO } from "../types";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const result = await fetch(
    "https://git.novus.world/api/v1/repos/Novus-public/react-engi-task/raw/data%2Ftransactions.json",
  );

  if (!result.ok) throw Error("An error occurred with your request.");

  const json = await result.json();
  const transactionsRaw: TransactionDTO[] = json.transactions;
  const transactions: Transaction[] = transactionsRaw.map(x => {
    return {
      name: x.name,
      status: x.status,
      category: x.category,
      carbonFootprint:
        x.carbon_footprint !== "" ? parseFloat(x.carbon_footprint) : 0,
      fees: x.carbon_footprint !== "" ? parseFloat(x.fees) : 0,
      type: x.type,
      amount: x.carbon_footprint !== "" ? parseFloat(x.amount) : 0,
      currency: x.currency,
      createdAt: x.created_at,
      icon: x.icon,
      brandPartner: x.brand_partner,
    };
  });

  return transactions.sort(
    (a, b) => moment(b.createdAt).unix() - moment(a.createdAt).unix(),
  );
};
