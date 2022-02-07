import moment from "moment";

export const getDaysOfCurrentMonth = (
  year: number,
  month: number,
): moment.Moment[] => {
  const monthYear = moment(`${month}-${year}`, "MM-YYYY");

  if (!monthYear.isValid()) {
    throw new Error("getDaysOfCurrentMonth: Invalid Date!");
  }

  const numberOfDaysInMonth = monthYear.daysInMonth();
  const startOfMonth = moment(`${month}-${year}`, "MM-YYYY").startOf("month");

  const days = [];
  for (let i = 0; i < numberOfDaysInMonth; i = i + 1) {
    days.push(moment(startOfMonth));
    startOfMonth.add(1, "days");
  }

  return days;
};
