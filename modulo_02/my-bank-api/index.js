const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post('/account', (req,res) => {
    const params = req.body;
    fs.writeFile("accounts.json", JSON.stringify(params), err => console.log(err))
})

app.listen(port, () => {
    console.log(`API Started on port ${port}`)
})