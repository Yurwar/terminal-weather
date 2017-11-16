'use strict';

const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('Type your city here: ', (city) => {
  http.get('http://api.apixu.com/v1/current.json?key=9afdacfd6c50436aa96204214171611&q=' + city, (res) => {

    res.setEncoding('utf-8');

    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    });
  })
 rl.close();
});
