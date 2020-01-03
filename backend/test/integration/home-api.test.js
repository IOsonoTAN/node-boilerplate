const tap = require('tap')
const supertest = require('supertest')
const buildFastify = require('../../app')

tap.test('GET `/` route', async (t) => {
  const fastify = buildFastify()

  t.tearDown(() => fastify.close())

  await fastify.ready()

  const response = await supertest(fastify.server)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')

  t.deepEqual(response.body, { status: 'OK' })
})
