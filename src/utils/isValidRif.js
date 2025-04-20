const { isSizeValid } = require("./isSizeValid");
const { isValidLetter, letterValue } = require("./isValidLetter");
const { isValidType } = require("./isValidType");
const { sumFactors } = require("./sumFactors");

/**
 * Validates if a given string is a valid Venezuelan Registro de Información Fiscal (RIF).
 *
 * This function performs several checks to determine the validity of a RIF, including:
 * - Verifying if the input is a string.
 * - Checking if the length is exactly 10 characters.
 * - Validating the first character as a valid RIF type letter ('C', 'E', 'G', 'J', 'P', 'V').
 * - Calculating a check digit based on the other characters and comparing it with the last character.
 *
 * @param {string} rif - The string to validate as a Venezuelan RIF.
 * @returns {boolean} Returns `true` if the input is a valid RIF, `false` otherwise.
 *
 * @author bellorinrobert
 * @date 2025-04-19
 */
const isValidRif = (rif) => {

    // Check if the RIF is a string
    if(!isValidType(rif)) return false;

    // Check if the RIF has a length of 10 characters
    if(!isSizeValid(rif)) return false;

    // Check if the first character is a valid RIF type
    if (!isValidLetter(rif[0])) return false;

    // Check the last character is valid
    const lastChar = rif[rif.length - 1];
    // Check sum of digits and letter value for the validation logic
    const numberRifcharacters = sumFactors(rif.slice(1, rif.length - 1));
    
    const rifValueCheck = letterValue(rif[0]);
    const modResult = (numberRifcharacters + rifValueCheck) % 11;

    // Calculate the expected check digit
    let isValidDigit = 11 - modResult;
    
    if (isValidDigit === 10) {
        isValidDigit = 0;
    }

    // Check if the last character matches the calculated check digit
    return isValidDigit.toString() === lastChar;
}

module.exports = {
    isValidRif
};