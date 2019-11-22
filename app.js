const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs')
.options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const getInfo= async(direccion)=>{
    try {
        let ciudad = await lugar.getLugarLatLng(direccion)
        let temperatura = await clima.getClima(ciudad.lat,ciudad.lng)
        console.log(`El clima de ${ciudad.direccion} es de ${temperatura}`);
    } catch (e) {
        console.log(`No de pudo determinar el clima de ${direccion}`);
    }
}
getInfo(argv.direccion)