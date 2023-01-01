require('./middleware')
require('./routes')

const Logger = require('./modules/Logger')
const event = new Logger()

event.on('listen', arg => console.log('Log an event!', arg))

event.log({
    id: 1
})