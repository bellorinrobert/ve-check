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

})