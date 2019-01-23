'use strict'

const fp = require('fastify-plugin')

async function superPlugin (fastify, opts) {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
}

module.exports = fp(superPlugin, {
  fastify: '>=1.0.0',
  name: 'super-plugin'
})
