/**
 * Imports the `validarRif` function from the main module.
 * 
 * @fileoverview Test file for validating RIF (Registro de Información Fiscal).
 * @requires ../index.js
 * @author bellorinrobert@gmail.com
 * @date 2023-10-06
 */
const { validarRif } = require("../index.js");

describe("isValidRif", () => {
    
    test("should return true for valid RIF", () => {
        //Rif de Digitel
        expect(validarRif("J304689713")).toBe(true);
        expect(validarRif("V158044150")).toBe(true);
        expect(validarRif("V-15.804.415-0")).toBe(true);
        expect(validarRif("V-6.011.457-5")).toBe(true);
        expect(validarRif("V-6.011.4575")).toBe(true);
        expect(validarRif("V-6.011-4575")).toBe(true);
        expect(validarRif("V-6-011-4575")).toBe(true);
        expect(validarRif("V6-011-4575")).toBe(true);
        //Rif de Corpocentro
        expect(validarRif("G200083433")).toBe(true);
        //Rif de la UNEFA
        expect(validarRif("G200062975")).toBe(true);
        //Rif del IUTEPAL
        expect(validarRif("J308810746")).toBe(true);
    })
    
    test("should return false for valid RIF", () => {
        //Rif de Digitel mal
        expect(validarRif("J304689712")).toBe(false);
        expect(validarRif("V158044151")).toBe(false);
        expect(validarRif("V-6.011-4576")).toBe(false);
        //Rif de Corpocentro mal
        expect(validarRif("G20y0083433")).toBe(false);
        //Rif de la UNEFA mal
        expect(validarRif("G20062975")).toBe(false);
        //Rif del IUTEPAL mal
        expect(validarRif("J3810746")).toBe(false);
    })

})