const { isValidRif } = require("../index.js");
describe("isValidRif", () => {
    

    test("should return true for valid RIF", () => {
        //Rif de Digitel
        expect(isValidRif("J304689713")).toBe(true);
        expect(isValidRif("V158044150")).toBe(true);
        //Rif de Corpocentro
        expect(isValidRif("G200083433")).toBe(true);
        //Rif de la UNEFA
        expect(isValidRif("G200062975")).toBe(true);
        //Rif del IUTEPAL
        expect(isValidRif("J308810746")).toBe(true);
    })

})