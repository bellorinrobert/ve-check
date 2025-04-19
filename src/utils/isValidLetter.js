/**
 * Checks if a given character is a valid leading letter for a Venezuelan RIF.
 *
 * The valid leading letters are 'C', 'E', 'G', 'J', 'P', and 'V' (case-insensitive).
 *
 * @param {string} letter - The character to validate.
 * @returns {boolean} Returns `true` if the character is a valid leading RIF letter, `false` otherwise.
 *
 * @author bellorinrobert
 * @date 2025-04-19 (As requested, using the current date)
 */
const isValidLetter = (letter) => {

    const lettersAllowed = ['C','E','G','J','P','V'];

    return typeof letter === 'string' &&
           letter.length === 1 &&
           lettersAllowed.includes(letter.toUpperCase());
}

/**
 * Returns a specific numeric value associated with a leading RIF letter.
 *
 * This function takes a single character and returns its corresponding value
 * based on the Venezuelan RIF structure. If the input is not a single valid
 * RIF letter, it returns 0.
 *
 * @param {string} letter - The leading RIF letter (case-insensitive).
 * @returns {number} The numeric value associated with the letter, or 0 if the input is invalid.
 *
 * @author bellorinrobert
 * @date 2025-04-19 (As requested, using the current date)
 */
const letterValue = (letter)  => {

    if(letter.length !== 1) return 0;

    if(typeof letter !== 'string') return 0;

    const letterValues = {
        'C': 12,
        'E': 8,
        'G': 20,
        'J': 12,
        'P': 16,
        'V': 4
    };

    if(letterValues[letter.toUpperCase()] === undefined) return 0;

    return letterValues[letter.toUpperCase()];

}

module.exports = {
    isValidLetter,
    letterValue
};