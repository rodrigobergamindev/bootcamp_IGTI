const estados = require('./Estados.json')
const cidades = require('./Cidades.json')
const fs = require('fs')


fs.writeFile('../myJson.json', 'Hello World!', function (err) {
    if (err){
        console.log(err)
    }
  });