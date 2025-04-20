const { isValidLetter, letterValue } = require('../../src/utils/isValidLetter.js');

describe('isValidLetter', () => {
    test('should return true for valid letters', () => {
        expect(isValidLetter('V')).toBe(true);
        expect(isValidLetter('J')).toBe(true);
        expect(isValidLetter('G')).toBe(true);
        expect(isValidLetter('c')).toBe(true);
        expect(isValidLetter('e')).toBe(true);
    });

    test('should return true for valid letters minus', () => {
        expect(isValidLetter('j')).toBe(true);
        expect(isValidLetter('g')).toBe(true);
        expect(isValidLetter('c')).toBe(true);
        expect(isValidLetter('e')).toBe(true);
        expect(isValidLetter('v')).toBe(true); 
    });

    test('should return false for invalid letters', () => {
        expect(isValidLetter('A')).toBe(false);
        expect(isValidLetter('Z')).toBe(false);
        expect(isValidLetter('1')).toBe(false);
        expect(isValidLetter('')).toBe(false);  
    });

    test('should return false for non-string inputs', () => {
        expect(isValidLetter(null)).toBe(false);
        expect(isValidLetter(undefined)).toBe(false);
        expect(isValidLetter(123)).toBe(false);
        expect(isValidLetter({})).toBe(false);
        expect(isValidLetter([])).toBe(false);
    });
});

describe('letterValue', () => {

    test('should return correct values for valid letters', () => {
        expect(letterValue('C')).toBe(12);
        expect(letterValue('E')).toBe(8);
        expect(letterValue('G')).toBe(20);
        expect(letterValue('J')).toBe(12);
        expect(letterValue('P')).toBe(16);
        expect(letterValue('V')).toBe(4);
        expect(letterValue('Z')).toBe(0);
    })

    test('should return correct values for valid letters minus', () => {
        expect(letterValue('c')).toBe(12);
        expect(letterValue('e')).toBe(8);
        expect(letterValue('g')).toBe(20);
        expect(letterValue('j')).toBe(12);
        expect(letterValue('p')).toBe(16);
        expect(letterValue('v')).toBe(4);
        expect(letterValue('Z')).toBe(0);
    })
    
    test('should return incorrect values', () => {
        expect(letterValue('cA')).toBe(0);
        expect(letterValue('ev')).toBe(0);
        expect(letterValue('gddd')).toBe(0);
        
    })

})