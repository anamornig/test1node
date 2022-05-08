/*
console.log(global.luckyNum);
global.luckyNum = '23';
console.log(global.luckyNum);

console.log(process.platform);
console.log(process.env.USER);

process.on('exit', function(){
    //do something!

})

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum')
})

eventEmitter.emit('lunch');

//const { readFile, readFileSync } = require('fs'); // Sync se lee primero, luego ejecuta el resto
//const txt = readFileSync('./hello.txt', 'utf8');
//console.log(txt);
//console.log('asapppp')

//readFile('./hello.txt', 'utf8', (err, txt) => {  //Read sin sync se lee segundo
   // console.log(txt)
//});

console.log('asapppp')

//const { readFile } = require('fs').promises;

//async function hello(){
 //   const file = await readFile('./hello.txt', 'utf8');
//}

const myModule = require('./my-module');
console.log(myModule);


const express = require('express');

const app = express();
//app.get('/', (request, response) => {
 //   readFile('home.html', 'utf8', (err, html) => {
  //      if(err) {
   //         response.status(500).send('Sorry, out of order')
    //    }
   //     response.send(html);
    //})

//});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))

const { readFile } = require('fs').promises
app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8'));
});


*/

const { readFile } = require('fs').promises;

const express = require('express');

const app = express();

app.get('/', async (request, response) => {

  response.send( await readFile('./home.html', 'utf8') );

});
// app.get('/', (request, response) => {

//   readFile('./home.html', 'utf8', (err, html) => {

//   if (err) {
//     response.status(500).send('sorry, out of order')
//   }
//     response.send(html);

//   })
// });

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))