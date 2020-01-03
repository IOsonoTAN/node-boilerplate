const Fastify = require('fastify')
const config = require('./config')
const controllers = require('./controllers')

const buildFastify = () => {
  const fastify = Fastify({
    logger: config.isLoggerEnable
  })
  fastify.register(controllers.root)

  return fastify
}

module.exports = buildFastify
