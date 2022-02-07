import React, { useCallback, useMemo, useState } from "react";
import { SafeAreaView, SectionList, StyleSheet, Text } from "react-native";
import { useQuery } from "react-query";
import { Persistor } from "../../services/persistor";

import { fetchTransactions } from "../../services/transactions";
import { Section, TransactionsScreenProps } from "../../types";
import { Transaction } from "../../Types/transaction";
import { debounce } from "../../utils/functionUtils";
import { groupTransactionsByDate } from "../../utils/sectionUtils";
import { Loader } from "../Loader/Loader";
import { MoneyMovementListItem } from "./MoneyMovementListItem";
import { SearchTransactions } from "./SearchTransactions";
import { SectionHeader } from "./SectionHeader";

export const MoneyMovementList = ({ navigation }: TransactionsScreenProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const {
    data: allTransactions,
    isFetching,
    isLoading,
    refetch: refetchTransactions,
  } = useQuery("transactions", fetchTransactions, {
    onSuccess: data => Persistor.setItem("user_transactions", data),
    onError: () => Persistor.getItem("user_transactions", []),
  });

  const filteredTransactions = useMemo(() => {
    if (!allTransactions) {
      return [];
    }

    return groupTransactionsByDate(
      searchValue !== ""
        ? allTransactions.filter(x => x.name.includes(searchValue))
        : allTransactions,
    );
  }, [allTransactions, searchValue]);

  // Fixed if debounce is returned in an arrow function
  // but this returns a new reference of debounce which breaks it
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchChange = useCallback(debounce(setSearchValue, 500), []);

  const onItemPress = useCallback(
    (item: Transaction) => {
      navigation.navigate("Transaction", { item });
    },
    [navigation],
  );

  const renderMoneyMovement = ({ item }: { item: Transaction }) => {
    return <MoneyMovementListItem transaction={item} onPress={onItemPress} />;
  };

  const renderSectionHeader = ({
    section,
  }: {
    section: Section<Transaction>;
  }) => <SectionHeader section={section} />;

  if (isLoading) {
    return <Loader size="large" />;
  }

  return (
    <SafeAreaView style={styles.listContainer}>
      <Text style={styles.header}>Transactions</Text>
      <SearchTransactions onSearchValueChanged={handleSearchChange} />
      <SectionList
        removeClippedSubviews={true}
        initialNumToRender={20}
        windowSize={10}
        stickySectionHeadersEnabled={false}
        maxToRenderPerBatch={10}
        sections={filteredTransactions}
        renderItem={renderMoneyMovement}
        renderSectionHeader={renderSectionHeader}
        refreshing={isFetching}
        onRefresh={refetchTransactions}
        ListEmptyComponent={<Text>No items found</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 22,
    fontWeight: "600",
  },
});
