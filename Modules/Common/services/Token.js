module.exports = {
  // Return base36 random string
  randString: function () {
    return Math.random().toString(36).substr(2);
  },
  // Generate token
  generate: function() {
    return "tBl" + this.randString() + this.randString() + "OcK";
  }
};