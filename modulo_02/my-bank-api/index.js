const express = require('express')
const app = express()
const port = 3000
const db = require('./database')



app.use(express.json())

app.get('/test', (req, res) => {
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
    db.createInitialJson()
    console.log(`API Started on port ${port}`)
})