$(document).ready(function() {
  var thermostat = new Thermostat();

  var showTemp = function() {
    $('#temperature').html(thermostat.temperature);
    colour();
  };

  var colour = function() {
    if (thermostat.temperature < 18) {
    $('#temperature').css('color', 'rgb(0,255,0)');
  } else if (thermostat.temperature > 25) {
    $('#temperature').css('color', 'rgb(255,0,0)');
  } else {
    $('#temperature').css('color', 'rgb(255, 255, 0)');
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



  // var powerSave = function() {
  //   $('#powersave').
  // }; 

  showTemp();

  $('#up').click(function() {
    errorListener(thermostat,thermostat.increaseTemp);
    showTemp();
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '/temperature_change', true);
    // xhr.send('temp=25');
    $.post('temperature_change', "temp=" + thermostat.temperature, function(msg) {
      $("#main-title").text(msg);
    });
  });

  $('#down').click(function() {
    errorListener(thermostat, thermostat.decreaseTemp);
    showTemp();
  });

  $('#reset').click(function() {
    thermostat.reset();
    showTemp();
  });

  $('#powersave').click(function() {
    if ($('#powersave').prop('checked') === true) thermostat.powerSave = true;
    if ($('#powersave').prop('checked') === false) thermostat.powerSave = false;
  });

});