export const getCurrencyFormatter = (currency: string): Intl.NumberFormat => {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency,
  });
};