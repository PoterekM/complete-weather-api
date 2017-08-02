var Weather = require('./../js/weather.js').weatherModule;


$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#temp-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getTemperature(city);
  });
});
