$(document).ready(function() {
  var thermostat = new Thermostat();

  var showTemp = function() {
    $('#temperature').html(thermostat.temperature);
    colour();
  };

  var colour = function() {
    if (thermostat.temperature < 18) {
    $('#temperature').css('color', 'rgb(0,255,50)');
  } else if (thermostat.temperature > 25) {
    $('#temperature').css('color', 'rgb(255,0,0)');
  } else {
    $('#temperature').css('color', 'rgb(255, 200, 0)');
  }
  };

  var errorListener = function(object, callback) {
    try{
      $('#errorContainer').html("");
      $('#errorContainer').show();
      callback.apply(object);
    }catch(err) {
      $('#errorContainer').html(err);
      $('#errorContainer').fadeOut("slow");
    }
  };

  var thermostatMessage = function() {
    $.post('temperature_change', 'temp=' + thermostat.temperature, function(msg) {
      $("#heating").text(msg);
    });
  };


  showTemp();

  $('#up').click(function() {
    errorListener(thermostat,thermostat.increaseTemp);
    showTemp();
    thermostatMessage();
  });

  $('#down').click(function() {
    errorListener(thermostat, thermostat.decreaseTemp);
    showTemp();
    thermostatMessage();
  });

  $('#reset').click(function() {
    thermostat.reset();
    showTemp();
    thermostatMessage();
  });

  $('#powersave').click(function() {
    if ($('#powersave').prop('checked') === true) thermostat.powerSave = true;
    if ($('#powersave').prop('checked') === false) thermostat.powerSave = false;
  });

});