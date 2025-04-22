const addZeroToVOrJ = (value) => {

    if(typeof value !== 'string') return false

    if(value.length < 9) return false

    if(value.length > 9) return false

    if(!/^[VJvj]/.test(value)) return false
    

    return `${value[0]}0${value.slice(1)}` 


}

module.exports = {
    addZeroToVOrJ
}