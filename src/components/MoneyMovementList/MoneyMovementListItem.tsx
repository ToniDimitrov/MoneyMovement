import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useTransactionData } from "../../hooks/useTransactionData";
import { Transaction } from "../../Types/transaction";
import { TransactionImage } from "../TransactionImage/TransactionImage";

type MoneyMovementListItemProps = {
  transaction: Transaction;
  onPress: (item: Transaction) => void;
};

const MoneyMovementListItemComponent = ({
  transaction,
  onPress,
}: MoneyMovementListItemProps) => {
  const { amount, carbonFootprint, createdTime } =
    useTransactionData(transaction);

  const handleOnPress = () => onPress(transaction);

  return (
    <TouchableOpacity
      style={styles.moneyMovementContainer}
      onPress={handleOnPress}
    >
      <>
        <View style={styles.imageContainer}>
          <TransactionImage
            imageUrl={transaction.icon}
            width={60}
            height="100%"
          />
        </View>
        <View style={styles.basicInfoContainer}>
          <Text style={styles.name}>{transaction.name}</Text>
          <Text style={styles.created}>{carbonFootprint}</Text>
          <Text style={styles.created}>{createdTime}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </>
    </TouchableOpacity>
  );
};

export const MoneyMovementListItem = React.memo(MoneyMovementListItemComponent);

const styles = StyleSheet.create({
  moneyMovementContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  imageContainer: { height: "100%", paddingRight: 15 },
  basicInfoContainer: {
    flex: 3,
  },
  amountContainer: {
    flex: 2,
    alignItems: "flex-end",
  },
  name: {
    fontWeight: "600",
    fontSize: 15,
    marginVertical: 10,
  },
  created: {
    color: "gray",
    marginVertical: 2,
    fontSize: 14,
  },
  amount: {
    fontWeight: "600",
    fontSize: 15,
    margin: 10,
  },
});
