
var url = ' http://mylogger.io/log';

const EventEmitter = require('events');

class Logger extends EventEmitter {
     log(message) {
        // send an http request
    
        console.log(message);
        // Raise an event 
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }
    
}

module.exports = Logger;
// module.exports.endPoint = url;