const routesRoot = (fastify, opts, next) => {
  fastify.get('/', (req, reply) => {
    reply.send({ status: 'OK' })
  })

  next()
}

module.exports = routesRoot
