const express = require('express');
const axios = require('axios');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
let port = process.env.PORT || 3001

app.use(bodyParser.json())


const key = {}

if(process.env.NODE_ENV === 'production') {
    
    key.google = process.env.googleKey;
    key.darkSky = process.env.darkSkyKey;

} else {
    const keys = require("./keys.js");
    key.google = keys.googleKey
    key.darkSky = keys.darkSkyKey
}





app.post('/api/address', (req, res) => {
    let addressToFetch = req.body.address

    findAddress(addressToFetch, (address) => {
        res.status(200).send(address)
    })
})

const findAddress = (address, cb) => {
    let addressData = {};
    // let googleKey = 'AIzaSyA80zFZaIgnpNGFthGD80iGGuvfJ2Z5ANM'
    let encodedUrl = encodeURIComponent(address);
    let geocodedUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl},&key=${key.google}`

    axios.get(geocodedUrl).then((response) => {
        if(response.data.status === "ZERO_RESULTS") {
            throw new Error("Unable to find that address")
        }

        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        let weatherUrl = `https://api.darksky.net/forecast/${key.darkSky}/${lat},${lng}`;

        addressData.address = response.data.results[0].formatted_address;

        return axios.get(weatherUrl).then((response) => {

            // console.log(JSON.stringify(response.data, undefined, 4))
            addressData.currentTemperature = response.data.currently.temperature;
            addressData.apparenttemperature = response.data.currently.apparentTemperature;
            addressData.daily = response.data.daily.data;
            return cb(addressData)
        })
    }).catch((e) => {
         if(e.response) {
             if(e.response.status === 404) {
                addressData.error = "Unable to connect to API servers"
                }
         } else {
            addressData.error = e.message;
         }
         return cb(addressData)
        }
    )
}

if(process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log('Server listening on Port ' + port);
})