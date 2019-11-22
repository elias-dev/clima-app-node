const axios = require('axios');


const getClima = async (lat, lng)=>{
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=875630f70d8c6529fc6a212be25cdc71&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}