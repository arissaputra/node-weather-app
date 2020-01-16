console.log('Client side javascript loaded');
const getWeather = (address, callback) => {
    fetch(`/weather?address=${address}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                return callback(data.error, undefined);
                
            }
            callback(undefined, data)
            
            
        })
    })

}

const weatherForm = document.querySelector('form')
const locResult = document.querySelector('#locResult')
const forecastResult = document.querySelector('#forecastResult')
let search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let loc = search.value
    locResult.textContent = 'Loading ...'
    forecastResult.textContent = ''
    getWeather(loc, (err, {location, forecast} = {}) => {
        if (err) {
            return locResult.textContent = err 
            
        } 
        locResult.textContent = location
        forecastResult.textContent = forecast
        
    })
    
})