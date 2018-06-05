import express from 'express'
import fs from 'fs'
import https from 'https'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 1701
const APIKEY = process.env.APIKEY
const middleware = require('./middleware')

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', middleware)
app.use(require('./controllers'))

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`The magic happens on port ${PORT}`);
  console.log(`with APIKEY: ${APIKEY}`);
});
