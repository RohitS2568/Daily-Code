//1. Event Emitter

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('An event occurred!');
});

myEmitter.emit('event');


//2. Event Emiiter
const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.on('event-name', (eventArgs) =>{
    console.log(`event argument ${eventArgs}`)
})

emitter.emit('event-name', 'some-payload');