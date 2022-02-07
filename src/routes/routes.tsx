import {
  Route,
  TransactionScreenProps,
  TransactionsScreenProps,
} from "../types";
import { MoneyMovement } from "../components/MoneyMovement/MoneyMovement";
import { MoneyMovementList } from "../components/MoneyMovementList/MoneyMovementList";
import React from "react";
import { NavigationHeaderTitle } from "../components/Navigation/NavigationHeaderTitle";
import moment from "moment";

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
        headerTitle: () => (
          <NavigationHeaderTitle
            title={route.params.item.name}
            subtitle={moment(route.params.item.createdAt).format(
              "DD/MM/YYYY HH:mm",
            )}
          />
        ),
      }),
    },
  ];
