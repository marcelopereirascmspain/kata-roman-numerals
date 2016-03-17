import { repeat, partial } from './utils';
import { expand } from './math';

let ones = partial(digitToSymbol, {
  unit: 'I',
  next: 'X',
  half: 'V'
});

let tens = partial(digitToSymbol, {
  unit: 'X',
  next: 'C',
  half: 'L'
});

let hundreds = partial(digitToSymbol, {
  unit: 'C',
  next: 'M',
  half: 'D'
});

let thousands = n => {
  return repeat(n, 'M');
};

function digitToSymbol(symbols, n) {
  if (n === 4) {
    return symbols.unit + symbols.half;
  }

  if (n === 9) {
    return symbols.unit + symbols.next
  }

  if (n >= 5) {
    return symbols.half + repeat(n - 5, symbols.unit);
  }

  return repeat(n, symbols.unit);
}

function expandedTermToSymbol({ digit, placeValue }) {
  switch (placeValue) {
    case 1000: return thousands(digit);
    case 100: return hundreds(digit);
    case 10: return tens(digit);
    default: return ones(digit);
  }
}

export default function toRoman(n) {
  return expand(n)
    .map(expandedTermToSymbol)
    .join('');
};
