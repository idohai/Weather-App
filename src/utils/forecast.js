const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=696487d2a416900b8a1d3bdd15a30b33&query=${latitude},${longitude}`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
                callback('Unable to find location', undefined)
        } else {
            // const location = `${response.body.location.name}, ${response.body.location.country}`
            const data = body.current
            const {weather_descriptions, temperature, feelslike} = data
            callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
        }
    })
}

module.exports = forecast