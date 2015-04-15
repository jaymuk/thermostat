describe('ThermostatView', function() {

  var getCssProperty = function(element, property) {
    return $(element).css(property);
  };

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature when loaded', function() {
    expect($('#temperature')).toHaveText('20');
  });

  it('increases temp by one when up button is clicked', function() {
    $('#up').click();
    expect('#temperature').toHaveText('21');
  });

  it('decreases temp by one when down button is clicked', function() {
    $('#down').click();
    expect('#temperature').toHaveText('19');
  });

  it('resets temp to 20 when reset button is clicked', function() {
    for (i = 0; i < 3; i++) {
      $('#down').click();
    }
    $('#reset').click();
    expect('#temperature').toHaveText('20');
  });

  it('displays temp in yellow when temp is between 18 and 25', function() {
    // var tempColor = $('#temperature').css('color');
    expect(getCssProperty('#temperature', 'color')).toEqual('rgb(255, 255, 0)');
  });

  it('displays temp in green when temp is below 18', function() {
    for (i = 0; i < 3 ; i++) {
      $('#down').click();
    }
    expect(getCssProperty('#temperature', 'color')).toEqual('rgb(0, 255, 0)');
  });

  it('displays temp in red when temp is above 25', function() {
    $('#powersave').click();
    for (i = 0; i < 6 ; i++) {
      $('#up').click();
    }
    expect(getCssProperty('#temperature', 'color')).toEqual('rgb(255, 0, 0)');
  });

  it('has max temp of 25 in powersave mode', function() {
    for(i = 0; i < 6; i++){
      $('#up').click();
    }
    expect('#errorContainer').toContainText('Error: Power save on. Cannot go higher than 25');
    expect('#temperature').toHaveText('25');
  });

  it('has max temp of 32 when not in powersave mode', function() {
    $('#powersave').click();
    for(i = 0; i < 40; i++){
      $('#up').click();
    }
    expect('#errorContainer').toContainText('32');
  });

  it('can change powersave back to on', function() {
    $('#powersave').click();
    $('#up').click();
    $('#powersave').click();
    for(i = 0; i < 5; i++){
      $('#up').click();
    }
    expect('#errorContainer').toContainText('25');
  });

});