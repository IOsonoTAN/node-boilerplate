require('dotenv').config()
const mongoose = require('mongoose')
const fastify = require('./app')()
const config = require('./app/config')

// Connections
const mongodbUri = config.mongodb.uri
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
  fastify.log.info(`direct mongo connected to ${mongodbUri}`)
})

fastify.listen(config.port, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
