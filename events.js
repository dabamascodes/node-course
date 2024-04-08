const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('eventEmitter', (data, secondData) => {
    console.log('received');
    console.log(data);
    console.log(secondData);
});

customEmitter.emit('eventEmitter', 'Hello world', [1,2,3]);
