const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

const toCurrency = (value: number): string => {
  return formatter.format(value);
};

export default toCurrency;
