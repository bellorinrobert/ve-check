/**
 * Calculates the sum of the product of corresponding elements from the input array 
 * and a predefined list of factors.
 *
 * @param {string[]} factores - An array of string numbers to be parsed and multiplied 
 *                              with the predefined factors.
 * @returns {number} The sum of the products of corresponding elements from the input 
 *                   array and the predefined factors.
 *
 * @author Bello
 * @date 2023-10-06
 */
const sumFactors = (factores) => {
    
    const factoresListOperation = [3, 2, 7, 6, 5, 4, 3, 2]

    return factoresListOperation.reduce(
        (aCum, facto, index) => { 
            return aCum += facto * parseInt(factores[index])
        },0)

}

module.exports = {
    sumFactors
}