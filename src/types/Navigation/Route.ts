import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ComponentType } from "react";
import { RootStackParamList } from "./RootStackParamList";

export type Route = {
  name: keyof RootStackParamList;
  component: ComponentType<any>;
  options?:
    | NativeStackNavigationOptions
    | ((
        params: NativeStackScreenProps<RootStackParamList, any>,
      ) => NativeStackNavigationOptions);
};
