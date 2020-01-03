require('dotenv').config()

const fastify = require('./app')()
const config = require('./app/config')

fastify.listen(config.port, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
