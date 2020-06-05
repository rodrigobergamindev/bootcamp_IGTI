const express = require('express')
const app = express()
const router = express.Router()
const fs = require('fs')


router.use(express.json())


/**METHODS */

router.route('/accounts')
    .post((req,res) => {
        const account = {
            name: req.body.name,
            balance: parseFloat(req.body.balance)
        }
    
        fs.readFile('./accounts.json', 'utf8', (err,data) => {
            if(!err) {
                const clients = JSON.parse(data)
                const accounts = clients.accounts
    
                if(!account.id) account.id = clients.id
                clients.id++
                accounts.push(account)
                fs.writeFile('./accounts.json', JSON.stringify(clients), err =>  console.log(err))
            }
            console.log(err)
        })
        res.send('account created!')
    })
    .get((req,res) => {
        fs.readFile('./accounts.json', 'utf8', (err,data) => {
            if(!err) {
                const clients = JSON.parse(data)
                res.send(clients)
            }
        })
    })
    .put((req, res) => {
        const newAccount = {
            id : parseInt(req.body.id),
            name: req.body.name,
            balance: parseFloat(req.body.balance)
        }
    
        fs.readFile('./accounts.json', 'utf8', (err,data) => {
            if(!err) {
                const clients = JSON.parse(data)
                const accounts = clients.accounts
                const myAccount = accounts.find(acc => acc.id === newAccount.id)
                const accIndex = accounts.indexOf(myAccount)
                
                accounts.splice(accIndex, 1, newAccount)
                fs.writeFile('./accounts.json', JSON.stringify(clients), err =>  console.log(err))
                
            }
            console.log(err)
        })
        res.send('account updated!')
    })


router.route('/accounts/:id')
    .get((req,res) => {
    fs.readFile('./accounts.json', 'utf8', (err,data) => {
        if(!err) {
            const id = req.params.id
            const clients = JSON.parse(data)
            const accounts = clients.accounts
            res.send(accounts[id - 1])
        }
        console.log(err)
    })
})
    .delete((req, res) => {

    fs.readFile('./accounts.json', 'utf8', (err,data) => {
        if(!err) {
            const id = parseInt(req.params.id)
            const clients = JSON.parse(data)
            const accounts = clients.accounts
            const account = accounts.find(acc => acc.id === id)
            const accIndex = accounts.indexOf(account)
            
            accounts.splice(accIndex, 1)
            fs.writeFile('./accounts.json', JSON.stringify(clients), err =>  console.log(err))
            
        }
        console.log(err)
    })
    res.send('account deleted')
})

router.put('/draw', (req,res) => {

    const account = {
        id : parseInt(req.body.id),
        draw: parseFloat(req.body.draw)
    }

    fs.readFile('./accounts.json', 'utf8', (err,data) => {
        if(!err) {
            const clients = JSON.parse(data)
            const accounts = clients.accounts
            const myAccount = accounts.find(acc => acc.id === account.id)

            if(account.draw){
                doDraw(myAccount)
            }
            

            function doDraw(acc){
                acc.balance = acc.balance - account.draw
            }

            fs.writeFile('./accounts.json', JSON.stringify(clients), err =>  console.log(err))
            res.send(`Draw released, new balance: ${myAccount.balance}`)
        }
        console.log(err)
    })
})

router.put('/deposit', (req, res) => {
    const account = {
        id : parseInt(req.body.id),
        deposit: parseFloat(req.body.deposit)
    }

    fs.readFile('./accounts.json', 'utf8', (err,data) => {
        if(!err) {
            const clients = JSON.parse(data)
            const accounts = clients.accounts
            const myAccount = accounts.find(acc => acc.id === account.id)

            if(account.deposit){
                doDeposit(myAccount)
            }
            

            function doDeposit(acc){
                acc.balance = acc.balance + account.deposit
            }

            fs.writeFile('./accounts.json', JSON.stringify(clients), err =>  console.log(err))
            res.send(`Deposit released, new balance: ${myAccount.balance}`)
        }
        console.log(err)
    })
})



module.exports = router