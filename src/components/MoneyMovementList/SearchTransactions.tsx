import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type SearchTransactionsProps = {
  searchValue?: string;
  onSearchValueChanged: (value: string) => void;
};

export const SearchTransactions = ({
  searchValue,
  onSearchValueChanged,
}: SearchTransactionsProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchValue}
        onChangeText={onSearchValueChanged}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 50, marginBottom: 20 },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 40,
    margin: 12,
    padding: 10,
  },
});
