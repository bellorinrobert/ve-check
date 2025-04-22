const { addZeroToVOrJ } = require("../../src/utils/addZeroToVOrJ");
const { validarRif } = require("../..")

describe('addZeroToV', () => {
    

    test('addZeroToV to V60114575', () => {
        expect(addZeroToVOrJ('V60114575')).toBe('V060114575');
    });
    
    test('addZeroToV to J75387350', () => {
        expect(addZeroToVOrJ('J75387350')).toBe('J075387350');
    });
    
    test('addZeroToV to V60114575', () => {
        
        const ajustarCedula = addZeroToVOrJ('V60114575')
        
        expect(validarRif(ajustarCedula)).toBe(true)

    });

    
});