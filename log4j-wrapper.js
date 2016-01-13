module.exports = {

  levels: ["ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "OFF"],

  level: "INFO",

  error: function(msg) {
    if (this.isErrorEnabled()) {
      console.error(msg)
    }
  },
  warn: function(msg) {
    if (this.isWarnEnabled()) {
      console.warn(msg)
    }
  },
  info: function(msg) {
    if (this.isInfoEnabled()) {
      console.log("INFO: " + this.getCaller() + msg)
    }
  },
  debug: function(msg) {
    if (this.isDebugEnabled()) {
      console.log("DEBUG: " + this.getCaller() + msg)
    }
  },
  trace: function(msg) {
    if (this.isTraceEnabled()) {
      console.log("TRACE: " + this.getCaller() + msg)
    }
  },

  /**
    Find the calling function to log it for debugging
  */
  getCaller:function() {
    try {
      i.dont.exist += 0; //doesn't exist- that's the point
    } catch (e) {
      var lines = e.stack.split('\n');
      for (var i = 0, len = lines.length; i < len; i++) {
        if(lines[i].indexOf('.getCaller')>0){
          return lines[i+1].replace(/\s{3,}at\s/, "") + ": ";
        }
      }
    }
    return "";
  },

  isErrorEnabled: function() {
    return this.isEnabled("ERROR");
  },
  isWarnEnabled: function() {
    return this.isEnabled("WARN");
  },
  isInfoEnabled: function() {
    return this.isEnabled("INFO");
  },
  isDebugEnabled: function() {
    return this.isEnabled("DEBUG");
  },
  isTraceEnabled: function() {
    return this.isEnabled("TRACE");
  },
  isEnabled: function(statementLevel) {
    return this.levels.indexOf(this.level) <= this.levels.indexOf(statementLevel);
  }
}
