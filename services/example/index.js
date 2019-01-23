'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/example', async function (request, reply) {
    // console.log('fastify.someSupport() called from example->', fastify.someSupport())
    return 'this is an example'
  })
}

module.exports[Symbol.for('plugin-meta')] = {
  decorators: {
    fastify: [
      'someSupport'
    ]
  }
}
