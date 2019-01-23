'use strict'

module.exports = function (fastify, opts, next) {
  const { pluginsOptions, serviceOptions } = opts
  fastify
    .register(require('fastify-env'), { schema: require('./config').schema })
    .register(require('./plugins'), pluginsOptions)
    .register(require('./services'), serviceOptions)
  next()
}
