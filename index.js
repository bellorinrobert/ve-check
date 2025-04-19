/**
 * @fileoverview Entry point for the ve-check project.
 * @author bellorinrobert
 * @date 2023-10-06
 */

const { isValidRif } = require("./src/utils/isValidRif");

function validarRif(rif) {
    return isValidRif(rif);
}
module.exports = {
    validarRif
}