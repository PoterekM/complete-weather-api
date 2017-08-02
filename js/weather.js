var apiKey = require('./../.env').apiKey;

function Weather (city) {
  this.city = city;
}

Weather.prototype.getHumidity = function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + apiKey) .then(function(response) {
    $('.showWeather').text("The humidity in " + this.city + " is " + response.main.humidity + "%");
  }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemperature = function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + apiKey) .then(function(response) {
    $('.showTemp').text("The temperature in Kelvin in " + this.city + " is " + response.main.temp + ".");
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

Weather.prototype.getFahrenheit = function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + apiKey) .then(function(response) {
    $('.showTemp').text("The temperature in Fahrenheit in " + this.city + " is " + response.main.temp + ".");
  }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
};
exports.weatherModule = Weather;
