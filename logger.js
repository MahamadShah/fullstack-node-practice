const EventEmitter = require('events');
const uuid = require('uuid');


//Genereate random id
//console.log (uuid.v4());
//can be generated multiple times


class Logger extends EventEmitter{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg});
    }
}

//module.exports = Logger;

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');

