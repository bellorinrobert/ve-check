
/**
 * Checks if the input has a valid size.
 *
 * This function verifies whether the length of the provided input is exactly 10.
 *
 * @param {string} input - The input string to validate.
 * @returns {boolean} Returns `true` if the input length is 10, otherwise `false`.
 *
 * @author bellorinrobert
 * @date 2023-10-06
 */
const isSizeValid = (input) => {
    return input.length === 10;
}

module.exports = {
    isSizeValid
}