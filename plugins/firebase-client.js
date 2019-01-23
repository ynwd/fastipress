'use strict'

const fp = require('fastify-plugin')
const client = require('firebase')

async function firebasePlugin (fastify, options) {
  client.initializeApp(options)
  fastify.decorate('client', client)
}

module.exports = fp(firebasePlugin, {
  fastify: '>=1.0.0',
  name: 'firebase-client'
})
