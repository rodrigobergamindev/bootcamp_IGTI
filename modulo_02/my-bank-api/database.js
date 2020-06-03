const fs = require('fs')



/*Writting JSON file*/

/*METHODS*/

const sequence = {
    _id:1,
    get id() {
        return this._id++
    }
}

//const accounts = clients.accounts


function createAccount(account){
    if(!account.id) account.id = sequence.id
    clients.nextId = sequence.id
    accounts.push(account)
    fs.writeFile('./accounts.json', JSON.stringify(accounts), err =>  console.log(err))
}


module.exports = {createAccount}