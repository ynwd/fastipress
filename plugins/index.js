const fp = require('fastify-plugin')

async function pluginIndex (fastify, opts) {
  fastify
    .register(require('./support'))
    .register(require('./firebase'), {
      apiKey: 'AIzaSyDfvp9y7E5Z11FSRE7CSowxpM10sZw1fH8',
      databaseURL: 'DATABASE_URL',
      projectId: 'diversa-2c6ee',
      storageBucket: 'URL_STORAGE_BUCKET'
    })
}

module.exports = fp(pluginIndex)
