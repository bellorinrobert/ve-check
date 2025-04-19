const { sumFactors } = require('../../src/utils/sumFactors')


describe('Should sum correct', () => {

    test("Valoes", () => {
        expect(sumFactors("11111111")).toBe(32)
        expect(sumFactors("22222222")).toBe(64)
        expect(sumFactors("13224184")).toBe(91)
        //El rif digitel sin J ni numero a validar
        expect(sumFactors("30468971")).toBe(172)
        
    })

})

