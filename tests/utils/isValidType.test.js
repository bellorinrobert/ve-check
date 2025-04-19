const { isValidType } = require('../../src/utils/isValidType.js')

describe('isValidType', () => {
    
    test('should return true for string', () => {
        expect(isValidType('1234567890')).toBe(true);
        expect(isValidType('V158044150')).toBe(true);
        expect(isValidType('J304689713')).toBe(true);
    })
    
    test('should return true for string', () => {
        expect(isValidType(1)).toBe(false);
        expect(isValidType(true)).toBe(false);
        expect(isValidType(false)).toBe(false);
        expect(isValidType(NaN)).toBe(false);
        expect(isValidType(undefined)).toBe(false);
    })

})