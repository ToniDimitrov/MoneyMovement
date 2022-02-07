import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Section, Transaction } from "../../types";

type SectionHeaderProps = {
  section: Section<Transaction>;
};

export const SectionHeader = ({ section }: SectionHeaderProps) => {
  const hasData = section.data.length > 0;
  const amountTransacted = useMemo(() => {
    const sectionAmountTransacted = section.data.reduce(
      (result: { [currency: string]: number }, cur) => {
        if (!result[cur.currency]) {
          result[cur.currency] = cur.amount;
        } else {
          result[cur.currency] += cur.amount;
        }

        return result;
      },
      {},
    );

    return Object.entries(sectionAmountTransacted)
      .map(([currency, amount]) =>
        amount.toLocaleString(undefined, {
          style: "currency",
          currency: currency,
        }),
      )
      .join(" & ");
  }, [section]);

  if (!hasData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{section.title}</Text>
      <Text style={styles.label}>{amountTransacted}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    paddingHorizontal: 10,
    paddingTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
  },
});
