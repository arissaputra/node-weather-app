const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherApi = `https://api.darksky.net/forecast/7020f6f9881f99e7dd8bf28e8470f3aa/${latitude+','+longitude}`
    request({url: weatherApi, json: true}, (error, response, {error:err, code, currently:current, daily}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
            
        } else if (err){
            callback(`${code + '.' + err}`, undefined);
            
        } else {
            callback(undefined, `${daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${' ' + current.precipProbability + '% '} chance of rain.`);
            
        }
        
    })

}

module.exports = forecast