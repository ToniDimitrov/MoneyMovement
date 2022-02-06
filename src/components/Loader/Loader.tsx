import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";

export const Loader = (props: ActivityIndicatorProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
