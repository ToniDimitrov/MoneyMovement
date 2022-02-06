import {
  Route,
  TransactionScreenProps,
  TransactionsScreenProps,
} from "../types";
import { MoneyMovement } from "../components/MoneyMovement/MoneyMovement";
import { MoneyMovementList } from "../components/MoneyMovementList/MoneyMovementList";

export const routes: Route<TransactionsScreenProps & TransactionScreenProps>[] =
  [
    {
      name: "History",
      component: MoneyMovementList,
    },
    {
      name: "Transaction",
      component: MoneyMovement,
      options: ({ route }: TransactionScreenProps) => ({
        title: route.params.item.name,
      }),
    },
  ];
