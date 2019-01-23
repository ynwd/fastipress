const fp = require('fastify-plugin')

async function pluginIndex (fastify, opts) {
  fastify
    .register(require('./support'))
    .register(require('./firebase-admin'), {
      credential: require('../config/firebase.json'),
      databaseURL: fastify.config.FIREBASE_DATABASE_URL
    })
    .register(require('./firebase-client'), {
      apiKey: fastify.config.FIREBASE_API_KEY,
      authDomain: fastify.config.FIREBASE_AUTH_DOMAIN,
      databaseURL: fastify.config.FIREBASE_DATABASE_URL,
      storageBucket: fastify.config.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: fastify.config.FIREBASE_MESSAGING_SENDER_ID
    })
}

module.exports = fp(pluginIndex)
