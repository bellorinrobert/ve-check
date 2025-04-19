const { isSizeValid } = require('../../src/utils/isSizeValid');

test('should return true for input with exactly 10 characters', () => {
    expect(isSizeValid('1234567890')).toBe(true);
    expect(isSizeValid("V158044150")).toBe(true);
    expect(isSizeValid("J304689713")).toBe(true);
    
});

test('should return false for input with less than 10 characters', () => {
    expect(isSizeValid('12345')).toBe(false);
    expect(isSizeValid("V14150")).toBe(false);
    expect(isSizeValid("J34689713")).toBe(false);
});

test('should return false for input with more than 10 characters', () => {
    expect(isSizeValid('12345678901')).toBe(false);
});