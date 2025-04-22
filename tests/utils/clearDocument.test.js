
const { clearDocument  } = require('../../src/utils/clearDocument.js');

describe('clearDocument', () => {  
    
    test('clearDocument to V-15.804.415-0', () => {
        expect(clearDocument('V-15.804.415-0')).toBe('V158044150');
    });
    
    test('clearDocument to V-60.114.575', () => {
        expect(clearDocument('V-60.114.575')).toBe('V060114575');
    });
    
})