/**
 * Checks if the given value is of type string.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the value is a string, otherwise `false`.
 * @author bellorinrobert
 * @date 2023-10-06
 */
const isValidType = (value) => {
  const type = typeof value;

  return type === 'string' 

}

module.exports = {
    isValidType
}