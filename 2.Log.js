// Local Module
const log = {
    info: function(info){
        console.log(`Info: ${info}`)
    },
    warn: function(warn){
        console.log(`Warn: ${warn}`)
    },
    error: function(error){
        console.log(`Error: ${error}`)
    }
}

module.exports = log