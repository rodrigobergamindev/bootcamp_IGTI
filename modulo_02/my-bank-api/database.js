const fs = require('fs')

/*METHODS*/

const sequence = {
    _id:1,
    get id() {
        return this._id++
    }
}

//const accounts = clients.accounts
async function createInitialJson() {

    try {
        await fs.readFile('./accounts.json', 'utf8', (err,data) => {
            if(err){
                const initialJson = {
                    id:sequence.id,
                    accounts: []
                }
                fs.writeFile('./accounts.json', JSON.stringify(initialJson), (err) => console.log(err))
            }
        })
    } catch (error) {
        console.log(error)
    }
}

function createAccount(account){
    if(!account.id) account.id = sequence.id
    clients.nextId = sequence.id
    accounts.push(account)
    fs.writeFile('./accounts.json', JSON.stringify(accounts), err =>  console.log(err))
}


module.exports = {createAccount, createInitialJson}