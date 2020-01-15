const request = require('request')

const geocode = (address, callback) => {
    const mapboxToken = 'pk.eyJ1IjoiYXJpaXp1IiwiYSI6ImNrNWQ3Y3FqbzE1dWQzdHJ3c3lxdGR4cjAifQ.2DYeUCBdDhKrF9WHNDLKvA'
    const mapboxApi = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxToken}&limit=1`
    
    request({url: mapboxApi, json: true}, (err, res, {message, features}) => {
        if (err) {
            callback('Unable to connect to geocoding service', undefined)
            
        } else if (message){
            callback(`error msg: ${message}`, undefined);
            
        } else if (features.length == 0){
            callback('Unable to find the location', undefined);
            
        } else {
            const longitude = features[0].center[0]
            const latitude = features[0].center[1]
            const location = features[0].place_name
            callback(undefined, {
                latitude,
                longitude,
                location
            })
    
        }
        
    })
}

module.exports = geocode