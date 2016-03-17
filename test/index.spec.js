import expect from 'expect';
import toRoman from '../src/index';

let r = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  12: 'XII',
  15: 'XV',
  20: 'XX',
  23: 'XXIII',
  30: 'XXX',
  31: 'XXXI',
  37: 'XXXVII',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  117: 'CXVII',
  164: 'CLXIV',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  1984: 'MCMLXXXIV',
  2000: 'MM',
  3000: 'MMM',
  4000: 'MMMM',
  4999: 'MMMMCMXCIX'
};

describe('roman numerals', () => {
  Object.keys(r).forEach(arabic => {
    let roman = r[arabic];

    it(`should convert ${arabic} to ${roman}`, () => {
      let actual = toRoman(arabic);
      let expected = roman;

      expect(actual).toEqual(expected);
    });
  });
});
