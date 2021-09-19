class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    setInterval(() => { 
      this.currentTime += 1;
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length < 2  ) {
      return (`0${value.toString()}`)
  } else {
      return value.toString();
  }; 
}

  stop() {
    clearInterval (this.start)
    return this.intervalId = null
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(Math.floor(this.currentTime / 60))}:${this.computeTwoDigitNumber(this.currentTime % 60)}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
