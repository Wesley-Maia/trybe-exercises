const convertToRoman = require('./roman-numerals');

describe('converting 1 digit numbers', () => {
  test('if conversion of numbers from 1 to 5 are successful', () => {
    expect(convertToRoman(1)).toBe('I');   // matcher
    expect(convertToRoman(2)).toBe('II');
    expect(convertToRoman(3)).toBe('III');
    expect(convertToRoman(4)).toBe('IV');
    expect(convertToRoman(5)).toBe('V');
  });

  test('if conversion of numbers from 6 to 9 are sucessful', () => {
    expect(convertToRoman(6)).toBe('VI');
    expect(convertToRoman(7)).toBe('VII');
    expect(convertToRoman(8)).toBe('VIII');
    expect(convertToRoman(9)).toBe('IX');
  });
});