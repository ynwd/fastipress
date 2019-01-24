'use strict'

const fp = require('fastify-plugin')

async function superPlugin (fastify, opts) {
  fastify
    .decorate('someSupport', function () {
      return 'hugs'
    })
    .decorate('authPreHandler', async function auth (request, reply) {
      // try {
      //   await fastify.admin.auth().verifyIdToken(idToken)
      // } catch (err) {
      //   reply.send(err)
      // }
    })
}

module.exports = fp(superPlugin, {
  fastify: '>=1.0.0',
  name: 'super-plugin'
})
