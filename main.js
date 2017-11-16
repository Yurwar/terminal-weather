'use strict';

const getWeather = require('./http.js');
const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type your city here: ', (answer) => {
  getWeather(answer);
  rl.close();
});
