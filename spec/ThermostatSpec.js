describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  describe('has a temperature', function() {

    it('that starts at 20 degrees', function () {
      expect(thermostat.temperature).toEqual(20);
    });

    it('that can increase', function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);
    });

    it('that can decrease', function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(19);
    });

    it('with a minimum value of 10', function() {
      thermostat.temperature = 10;

      expect(function() {
        thermostat.decreaseTemp();
       }).toThrow(new Error('Sorry, cannot go lower than 10'));
    });

    it('with a maximum value of 32', function() {
      thermostat.temperature = 32;

      expect(function() {
        thermostat.increaseTemp();
      }).toThrow(new Error('Sorry, cannot go higher than 32'));
    });
  });


  describe('has a power saving mode', function() {

    it('that is on by default', function() {
      expect(thermostat.powerSave).toEqual(true);
    });

    it('that can be switched off', function() {
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSave).toEqual(false);
    });

    it('that can be switched on', function() {
      thermostat.powerSaveSwitch();
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSave).toEqual(true);
    });

    it('with a max temperature of 25', function() {
      thermostat.powerSave = true;
      thermostat.temperature = 25;
      
      expect(function() {
        thermostat.increaseTemp();
      }).toThrow(new Error('Power save on. Cannot go higher than 25'));
    });
  });


  describe('has a reset button', function() {

    it('which sets the temperature to 20', function(){
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('has a display', function() {

    it('which is green when temp is below 18', function() {
      thermostat.temperature = 13;
      expect(thermostat.displayColour()).toEqual('green');
    });

    it('which is yellow when temp is below 25', function() {
      thermostat.temperature = 20;
      expect(thermostat.displayColour()).toEqual('yellow');
    });
  
    it('which is red when temp is above 25', function() {
      thermostat.temperature = 30;
      expect(thermostat.displayColour()).toEqual('red');
    });

  });

});
