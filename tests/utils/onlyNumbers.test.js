const { onlyNumbers } = require('../../src/utils/onlyNumbers')

describe('isValidLetter', () => {
    test('should all factores be numbers', () => {
        expect(onlyNumbers("11111111")).toBe(true);
        expect(onlyNumbers("1234111")).toBe(true);
        
    });
    
    test('should no allowed not number', () => {
        expect(onlyNumbers(1)).toBe(false);
        expect(onlyNumbers(8)).toBe(false);
        
    });

    test('should no one letter', () => {
        expect(onlyNumbers("1a")).toBe(false);
        expect(onlyNumbers("Vsdd122")).toBe(false);
        
    });
    
    

});