'use strict'

const fp = require('fastify-plugin')
const admin = require('firebase-admin')

async function firebasePlugin (fastify, options) {
  const { credential, databaseURL } = options
  admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL
  })

  fastify.decorate('admin', admin)
}

module.exports = fp(firebasePlugin, {
  fastify: '>=1.0.0',
  name: 'firebase-admin'
})
