const controllers = require('../controllers')

const routes = async (fastify, opts, next) => {
  fastify.get('/', controllers.root.homepage)

  next()
}

module.exports = routes
