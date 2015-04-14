describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('it has a temperature', function() {

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

  });

});
