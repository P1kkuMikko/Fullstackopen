const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/note')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

if (!config.MONGODB_URI) {
  console.log('MONGODB_URI not defined in .env file')
  process.exit(1)
}

const url = config.MONGODB_URI

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(url).then(() => {
  logger.info('connected to MongoDB')
}).catch((error) => {
  logger.error('error connection to MongoDB:', error.message)
})

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app