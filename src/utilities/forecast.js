const request = require("request");
const API_KEY_WEATHERSTACK = "c366a1aee90d3e06ecf8b38f0896394b";

const forecast = (latitude, longitude, callback) => {
  const url_weatherStack = `http://api.weatherstack.com/current?access_key=${API_KEY_WEATHERSTACK}&query=${latitude},${longitude}&units=f`;

  request({ url: url_weatherStack, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        Overcast: response.body.current.weather_description,
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
