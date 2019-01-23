'use strict'

const fp = require('fastify-plugin')
const admin = require('firebase-admin')
const serviceAccount = require('../config/firebase.json')

async function firebasePlugin (fastify, options = {}) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    // databaseURL: 'https://diversa-2c6ee.firebaseio.com'
  })

  fastify.decorate('firebase', admin)
}

module.exports = fp(firebasePlugin, {
  fastify: '>=1.0.0',
  name: 'firebase-plugin'
})
