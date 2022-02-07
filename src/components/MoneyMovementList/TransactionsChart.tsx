import moment from "moment";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

import { LineChart } from "react-native-chart-kit";
import { Transaction } from "../../types";
import { getDaysOfCurrentMonth } from "../../utils/dateUtils";
import { getTransactionAmountsByDate } from "../../utils/transactionUtils";

type TransactionsChartProps = {
  transactions: Transaction[];
  width: number;
  height: number;
};

type ChartData = {
  labels: string[];
  datasets: {
    data: number[];
  }[];
};

const chartConfig = {
  backgroundGradientFrom: "#289a3d",
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: "#289a3d",
  backgroundGradientToOpacity: 0.8,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 1,
  barPercentage: 0.2,
  propsForDots: {
    r: "4",
    strokeWidth: "1",
  },
  style: {
    width: "100%",
  },
};

const X_AXIS_MAX_LABELS = 6;

export const TransactionChart = ({
  transactions,
  width,
  height,
}: TransactionsChartProps) => {
  const chartData: ChartData = useMemo(() => {
    const now = moment();
    const daysInMonth = getDaysOfCurrentMonth(now.year(), now.month());

    const labelRadix = Math.max(
      Math.floor(daysInMonth.length / X_AXIS_MAX_LABELS),
      1,
    );
    const labels = daysInMonth
      .filter((_, i) => i % labelRadix === 0)
      .map(x => x.format("DD/MM"));

    const transactionAmountByDate = getTransactionAmountsByDate(
      now,
      transactions,
    );
    const data = daysInMonth.map(
      day => transactionAmountByDate[day.format("DD/MM")] ?? 0,
    );

    return {
      labels,
      datasets: [
        {
          data,
        },
      ],
    };
  }, [transactions]);

  return (
    <LineChart
      style={styles.chart}
      data={chartData}
      width={width}
      height={height}
      bezier
      withInnerLines={false}
      chartConfig={chartConfig}
    />
  );
};

const styles = StyleSheet.create({
  chart: { marginTop: 10, marginBottom: 10 },
});
