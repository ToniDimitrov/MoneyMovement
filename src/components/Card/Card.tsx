import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type CardProps = {
  children?: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
    margin: 15,
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
});
