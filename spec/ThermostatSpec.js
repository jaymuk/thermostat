describe('Thermostat', function() {

  describe('it has a temperature', function() {

    it('that starts at 20 degrees', function () {
      var thermostat = new Thermostat();

      expect(thermostat.temperature).toEqual(20);
    });

  });

});
