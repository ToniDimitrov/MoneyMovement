import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTransactionData } from "../../hooks/useTransactionData";
import { TransactionScreenProps } from "../../types/Navigation/TransactionScreenProps";
import { Card } from "../Card/Card";
import { InfoItem } from "../Card/InfoItem";
import { TransactionImage } from "../TransactionImage/TransactionImage";

export const MoneyMovement = ({
  route,
}: TransactionScreenProps): JSX.Element => {
  const { item } = route.params;
  const { category, amount, carbonFootprint, fee, status, type } =
    useTransactionData(item);

  return (
    <View style={styles.container}>
      {item.brandPartner ? (
        <View style={styles.partnerFlagContainer}>
          <Text style={styles.partnerFlagText}>MoneyMovement® Partner</Text>
        </View>
      ) : null}
      <View style={styles.icon}>
        <TransactionImage imageUrl={item.icon} width="100%" height="15%" />
      </View>
      <Card>
        <InfoItem label="Amount" value={amount} />
        <InfoItem label="Fee" value={fee} />
        <InfoItem label="Status" value={status} />
      </Card>
      <Card>
        <InfoItem label="Carbon Footprint" value={carbonFootprint} />
      </Card>
      <Card>
        <InfoItem label="Category" value={category} />
        <InfoItem label="Type" value={type} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  moneyMovementContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: 10,
  },
  partnerFlagContainer: {
    backgroundColor: "#8ac900",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 10,
    alignItems: "center",
  },
  partnerFlagText: {
    color: "#ffffff",
  },
  icon: {
    margin: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
