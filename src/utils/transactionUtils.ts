const categoryNameMap: { [key: string]: string } = {
  education: "Education",
  groceries: "Groceries",
  gifts: "Gifts",
  culture: "Culture",
  fashion: "Fashion",
  transportation: "Transportation",
  home: "Home",
  bars_and_restaurants: "Bars & Restaurants",
  unknown_category: "Unknown",
};

export const getCategoryName = (value: string): string => {
  return categoryNameMap[value];
};
