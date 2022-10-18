const events = require("events");

module.exports = (function() {
    var _getInstance = function() {
        return new events.EventEmitter();
    }

    var instance = null;
    return new function() {
        this.getEmitter = function() {
            console.log(instance)
            if (instance == null) {
                instance = _getInstance(this);
                _getInstance = null;
            }
            instance.on("test", function() {
            })
            return instance;
        }
    }
})().getEmitter;