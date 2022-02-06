import { Transaction } from "../transaction";

export type RootStackParamList = {
  Transaction: { item: Transaction };
  History: undefined;
};
