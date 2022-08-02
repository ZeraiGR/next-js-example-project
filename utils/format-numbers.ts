export const numWithSpaces = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const priceRu = (price: number): string => numWithSpaces(price).concat(' ₽');
