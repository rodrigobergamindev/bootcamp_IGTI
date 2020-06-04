const express = require('express')
const app = express()
const router = require('./routes/routes')
const port = 3000
const fs = require('fs')



app.use('/', router)


app.listen(port, () => {
    async function createInitialJson() {

        try {
            await fs.readFile('./accounts.json', 'utf8', (err,data) => {
                if(err){
                    const initialJson = {
                        id:1,
                        accounts: []
                    }
                    fs.writeFile('./accounts.json', JSON.stringify(initialJson), (err) => console.log(err))
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    createInitialJson()
    console.log(`API Started on port ${port}`)
})