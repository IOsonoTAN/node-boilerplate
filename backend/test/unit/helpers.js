const tap = require('tap')
const helpers = require('../../app/helpers')

tap.test('should return true with param as string', async (t) => {
  const result = helpers.isTrueBoolean('true')
  t.equal(result, true)
  t.end()
})

tap.test('should return true with param as boolean', async (t) => {
  const result = helpers.isTrueBoolean(true)
  t.equal(result, true)
  t.end()
})

tap.test('should return false with param as string', async (t) => {
  const result = helpers.isTrueBoolean('false')
  t.equal(result, false)
  t.end()
})

tap.test('should return false with param as boolean', async (t) => {
  const result = helpers.isTrueBoolean(false)
  t.equal(result, false)
  t.end()
})
