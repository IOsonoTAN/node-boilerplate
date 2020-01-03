const Fastify = require('fastify')
const config = require('./config')
const routes = require('./routes')

const buildFastify = () => {
  const fastify = Fastify({
    logger: config.isLoggerEnable
  })
  fastify.register(routes.root)

  return fastify
}

module.exports = buildFastify
