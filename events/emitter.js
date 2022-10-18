const events = require("events");

module.exports = (function() {
    var _getInstance = function() {
        return new events.EventEmitter();
    }

    var instance = null;
    return new function() {
        this.getEmitter = function() {
            if (instance == null) {
                instance = _getInstance();
                _getInstance = null;
            }
            return instance;
        }
    }
})().getEmitter();