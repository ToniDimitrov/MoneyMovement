import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ComponentType } from "react";
import { RootStackParamList } from "./RootStackParamList";
import { TransactionScreenProps } from "./TransactionScreenProps";
import { TransactionsScreenProps } from "./TransactionsHistoryScreenProps";

export type Route<T extends NativeStackScreenProps> = {
  name: keyof RootStackParamList;
  component: ComponentType<any>;
  options?:
    | NativeStackNavigationOptions
    | ((T) => NativeStackNavigationOptions);
};
