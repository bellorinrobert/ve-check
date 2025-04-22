const { addZeroToV } = require("./addZeroToV");

const clearDocument = (value) => {
    if (typeof value !== 'string') return false;
    
    let valueClear = value.replace(/[-.]/g, '')

    if (valueClear.startsWith('V') && valueClear.length == 9 ) {
        
        return addZeroToV(valueClear)
        
    }

    return valueClear
}

module.exports = {
    clearDocument
}