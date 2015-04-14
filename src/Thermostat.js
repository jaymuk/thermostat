var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemp = function() {
  if(this.temperature === 32){
    throw new Error('Sorry, cannot go higher than 32');
  }

  this.temperature ++;
};

Thermostat.prototype.decreaseTemp = function() {
  if(this.temperature === 10) {
    throw new Error('Sorry, cannot go lower than 10');
  }

  this.temperature --;
};
