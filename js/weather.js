var apiKey = require('./../.env').apiKey;

function Weather () {

}

Weather.prototype.getHumidity = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) { displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemperature = function(city, tempKelvin) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) {
    tempKelvin(city, response.main.temp);
  }).fail(function(error) {
    $('.showKelvin').text(error.responseJSON.message);
  });
};

Weather.prototype.getFahrenheit = function(city, tempFahren) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) {
    var tempFahrenConversion = parseInt((response.main.temp * (9/5) - 459.67));
    tempFahren(city, tempFahrenConversion);
  }).fail(function(error) {
    $('.showFah').text(error.responseJSON.message);
  });
};
exports.weatherModule = Weather;
