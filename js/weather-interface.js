var Weather = require('./../js/weather.js').weatherModule;


$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#humidity-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city);

  });
});
