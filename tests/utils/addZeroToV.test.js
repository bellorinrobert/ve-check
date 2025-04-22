const { addZeroToV } = require("../../src/utils/addZeroToV")
const { validarRif } = require("../..")

describe('addZeroToV', () => {
    

    test('addZeroToV to V60114575', () => {
        expect(addZeroToV('V60114575')).toBe('V060114575');
    });
    
    test('addZeroToV to V60114575', () => {
        
        const ajustarCedula = addZeroToV('V60114575')
        
        expect(validarRif(ajustarCedula)).toBe(true)

    });

    
});