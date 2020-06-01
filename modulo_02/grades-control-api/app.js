const express = require('express');
const winston = require('winston');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'))
app.use('/image', express.static('public'))
app.use('/index', express.static('public/html'))
/*
app.use((req, res, next) => {
    console.log(new Date())
    next()
})

app.use('/testMiddleware', (req, res, next) => {
    console.log('/testMiddleware')
    if(req.method === 'GET') {
        next()
    }else {
        res.end()
    }
})

app.get('/testMiddleWare', (req, res) => {
    res.send("GET /testMiddleware")
})
*/

//Seção de tratamento de erros

/*
app.get('/', function (req,res) {
    throw new Error('Error Message')
})
*/

const { combine, timestamp, label, printf} = winston.format;

const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`
})

const logger = winston.createLogger({
    level:'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: 'grades-control-api.log'})
    ],
    format : combine(
        label({ label : 'grades-control-api'}),
        timestamp(),
        myFormat
    )
})

logger.error('Error log');
logger.warn('Warn log');
logger.info('Info log');
logger.verbose('Verbose log')
logger.debug('Debug log')
logger.silly('Silly log')
logger.log('info', 'Hello with parameter!')


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})