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

router.get('/accounts/:id', (req,res) => {
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

/*
router.delete('/accounts/:id', (req, res) => {

    fs.readFile('./accounts.json', 'utf8', (err,data) => {
        if(!err) {
            const id = req.params.id
            const clients = JSON.parse(data)
            const accounts = clients.accounts
            const account = accounts.find(acc => acc.id === id)
            console.log(accounts)

        }
        console.log(err)
    })

})
*/


module.exports = router