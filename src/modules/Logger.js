const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(e) {
        this.emit('listen', e)
    }
}

module.exports = Logger