const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a9caedd68ed4f6b9b602bb4f6ef76b8d&query=${latitude},${longitude}`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect');
        } else if (body.error) {
            callback('Coordinate error')
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]} it's currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees.`);
        }
    });
};

module.exports = forecast;