var Weather = require('./../js/weather.js').weatherModule;

var tempKelvin = function (city, tempData) {
  $('.showKelvin').text("The temperature in Kelvin in " + city + " is " + tempData + ".");
};

var tempFahren = function (city, tempData) {
  $('.showFah').text("The temperature in Fahrenheit in " + city + " is " + tempData + ".");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#temp-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getTemperature(city, tempKelvin);
  });

  $('#fah-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
  currentWeatherObject.getFahrenheit(city, tempFahren);
  });
});
