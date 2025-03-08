const mongoose = require('mongoose')
const config = require('./utils/config')
const Note = require('./models/note') // Import the Note model

if (!config.MONGODB_URI) {
  console.log('MONGODB_URI not defined in .env file')
  process.exit(1)
}

const url = config.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url).then(() => {
  Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
})