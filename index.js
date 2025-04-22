/**
 * @fileoverview Entry point for the ve-check project.
 * @author bellorinrobert
 * @date 2025-06-19
 */

const { clearDocument } = require("./src/utils/clearDocument");
const { isValidRif } = require("./src/utils/isValidRif");

function validarRif(rif) {
    
    const rifClear = clearDocument(rif)
    
    return isValidRif(clearDocument(rifClear))  
}
module.exports = {
    validarRif
}