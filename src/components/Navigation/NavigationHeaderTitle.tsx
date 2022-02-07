import React from "react";
import { StyleSheet, Text, View } from "react-native";

type NavigationHeaderTitleProps = {
  title: string;
  subtitle?: string;
};

const NavigationHeaderTitleComponent = ({
  title,
  subtitle,
}: NavigationHeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export const NavigationHeaderTitle = React.memo(NavigationHeaderTitleComponent);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    color: "#5c5c5c",
  },
});
