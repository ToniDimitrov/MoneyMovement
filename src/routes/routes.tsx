import React from "react";
import moment from "moment";

import { Route, TransactionScreenProps } from "../types";
import { MoneyMovement } from "../components/MoneyMovement/MoneyMovement";
import { MoneyMovementList } from "../components/MoneyMovementList/MoneyMovementList";
import { NavigationHeaderTitle } from "../components/Navigation/NavigationHeaderTitle";

export const routes: Route[] = [
  {
    name: "History",
    component: MoneyMovementList,
    options: {
      headerShown: false,
    },
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
