const formatValue = (value: number): string =>
  Intl.NumberFormat('BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
  })
    .format(value)
    .replace(/^(\D+)/, 'R$ ');

export default formatValue;
