const request = require("request");

const geocode = (address, callback) => {
  const API_KEY_POSITIONSTACK = "bda2476a8958e2fd93c63d20769998ba";
  const url_positionStack = `http://api.positionstack.com/v1/forward?access_key=${API_KEY_POSITIONSTACK}&query=${encodeURIComponent(
    address
  )}`;

  request({ url: url_positionStack, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.data[0].longitude,
        latitude: response.body.data[0].latitude,
        location: response.body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
