
module.exports.getDate = getDate;

function getDate(){
    let today = new Date()
    let options = {
        // year : "numeric",
        month : "long",
        weekday : "long",
        day : "numeric"
    }

    let day = today.toLocaleDateString("en-US",options)

    return day
}

module.exports.getDay = getDay
function getDay(){
    let today = new Date()
    let options = {
        day : "numeric"
    }

    let day = today.toLocaleDateString("en-US",options)

    return day
}
