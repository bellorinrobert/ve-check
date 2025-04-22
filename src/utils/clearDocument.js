const { addZeroToVOrJ } = require("./addZeroToVOrJ");

const clearDocument = (value) => {
    if (typeof value !== 'string') return false;
    
    let valueClear = value.replace(/[-.]/g, '')

    if (/^[VJvj]/.test(valueClear) && valueClear.length == 9 ) {
        
        return addZeroToVOrJ(valueClear)
        
    }

    return valueClear
}

module.exports = {
    clearDocument
}