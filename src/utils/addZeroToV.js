const addZeroToV = (value) => {

    if(typeof value !== 'string') return false

    if(value.length < 9) return false

    if(value.length > 10) return false

    if(value[0] !== 'V') return false

    return `V0${value.slice(1)}` 


}

module.exports = {
    addZeroToV
}