/**
 * 
 * Checks if a given string contains only numeric characters.
*
* @param {string} factores - The input string to validate.
* @returns {boolean} Returns `true` if the input string contains only numbers, otherwise `false`.
*
* @author bellorinrobert
* @date 2023-10-06
*/
const onlyNumbers = (factores) => {
  if (typeof factores != "string") return false;

  const factoresList = factores.split("");

  const invalidValue = factoresList.map((e) => (parseInt(e) ? true : false));

  if (invalidValue.includes(false)) return false;

  return true;
};

module.exports = {
  onlyNumbers,
};
