// const logger = require('./logger')

// function sayHello(name) {
//     console.log("Hello", name)
// }

// // sayHello("bright")
// // console.log(logger)
// logger.log("message  from another module")

//THE PATH MODULE 

// const path = require('path');

// var pathObj =  path.parse(__filename)

// console.log(pathObj)

// // THE OS MODULE

// const os = require('os')
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

// THE FILE MODULE

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files) {
//     if(err) console.log('Error: ', err);
//     else console.log('Result: ', files)
// })

// THE EVENT MODULE

// const EventEmitter = require('events');


//Register a listener

// Raise an event 
// emitter.emit('messageLogged', { id: 1, url: 'http://'});
// const Logger = require('./logger')
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg)
// })


// logger.log('message')

// THE HTTP MODULE 

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...')