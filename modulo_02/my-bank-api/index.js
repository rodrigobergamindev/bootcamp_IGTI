const express = require('express')
const app = express()
const port = 3000
const db = require('./database')


/*
app.use(function (req,res,next))
app.use(db.createInitialJson()) **
*/



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
    console.log(`API Started on port ${port}`)
})