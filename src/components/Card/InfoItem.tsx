import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

type InfoItemProps = {
  label: string;
  value: string | number;
};

export const InfoItem = memo(({ value, label }: InfoItemProps) => {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  infoItem: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#8A8A8A",
    fontSize: 14,
    fontWeight: "700",
  },
  value: {
    fontSize: 14,
    fontWeight: "400",
  },
});
