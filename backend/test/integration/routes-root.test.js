const tap = require('tap')
const supertest = require('supertest')
const buildFastify = require('../../app')

tap.test('GET `/` route', async (t) => {
  const fastify = buildFastify(true)

  t.tearDown(() => fastify.close())

  await fastify.ready()

  t.beforeEach(async (done, t) => {
    done()
  })

  t.afterEach(async (done, t) => {
    done()
  })

  t.test('should return HTTP 200 and get status is "OK"', async (t) => {
    const response = await supertest(fastify.server)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')

    t.deepEqual(response.body, { status: 'OK' })
  })
})
