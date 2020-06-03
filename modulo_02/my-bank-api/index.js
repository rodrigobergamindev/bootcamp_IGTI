const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000
const db = require('./database')

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post('/account', (req, res) => {
    const account = db.createAccount({
        name: req.body.name,
        balance: parseFloat(req.body.balance)
    })
    res.send('account created!')
})




app.listen(port, () => {
    try {
        fs.readFile("./accounts.json", "utf8", (err, data) => {
            if (err) {
                const initialJson = {
                    nextId: 1,
                    accounts: []
                }
                fs.writeFile('./accounts.json', JSON.stringify(initialJson), (err) => console.log(err))
            }

        })
    } catch (error) {
        console.log(error)
    }
    console.log(`API Started on port ${port}`)
})