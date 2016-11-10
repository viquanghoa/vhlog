var vLog = function () {
  this.log = function () {
    arguments[0] = '[INFO] ' + arguments[0];
    console.log.apply(this, arguments);
  };
  this.info = function () {
    arguments[0] = '[INFO] ' + arguments[0];
    console.info.apply(this, arguments);
  };
  this.error = function () {
    arguments[0] = '[ERROR] ' + arguments[0];
    console.error.apply(this, arguments);
  };
  this.debug = function () {
    arguments[0] = '[DEBUG] ' + arguments[0];
    console.log.apply(this, arguments);
  };
  this.trace = function () {
    arguments[0] = '[TRACE] ' + arguments[0];
    console.trace.apply(this, arguments);
  };
};
module.exports = new vLog;