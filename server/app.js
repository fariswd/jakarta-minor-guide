require('dotenv').config()
const app         = require('express')();
const bodyParser  = require('body-parser')
const logger      = require('morgan')
const mongoose    = require('mongoose').connect(process.env.DB)
const listRouter  = require('./router/listRouter')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(logger('dev'))

app.use('/v1/', listRouter)

app.listen(3000, () => {
  console.log('running on port 3000')
})
