/**
 * Imports the `validarRif` function from the main module.
 * 
 * @fileoverview Test file for validating RIF (Registro de Información Fiscal).
 * @requires ../index.js
 * @author bello
 * @date 2023-10-06
 */
const { validarRif } = require("../index.js");

describe("isValidRif", () => {
    
    test("should return true for valid RIF", () => {
        //Rif de Digitel
        expect(validarRif("J304689713")).toBe(true);
        expect(validarRif("V158044150")).toBe(true);
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
        //Rif de Corpocentro mal
        expect(validarRif("G20y0083433")).toBe(false);
        //Rif de la UNEFA mal
        expect(validarRif("G20062975")).toBe(false);
        //Rif del IUTEPAL mal
        expect(validarRif("J3810746")).toBe(false);
    })

})