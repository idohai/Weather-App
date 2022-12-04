const request = require('request')

const geocode = (address, callback) =>{
    const url = `http://api.positionstack.com/v1/forward?access_key=3820bd40f11188887981652d60042bbc&query=${encodeURIComponent(address)}&limit=1`
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if(body.error || body.data.length === 0){
            callback("Couldn't find location, Please change search term", undefined)
        } else {
            const data = body.data[0]
            const location = `${data.name}. ${data.region}, ${data.country}`
            const {latitude, longitude} = data
            callback(undefined, {location, latitude, longitude})
        }
    })
}

module.exports = geocode