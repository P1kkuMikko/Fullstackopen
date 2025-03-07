const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const fs = require('fs')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the Blog API')
})

app.get('/api/blogs', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading database file')
      return
    }
    const blogs = JSON.parse(data).blogs
    res.json(blogs)
  })
})

app.use('/api/blogs', blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
