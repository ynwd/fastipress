'use strict'

module.exports = function (fastify, opts, next) {
  fastify
    .register(require('./plugins'))
    .register(require('./services'))
  next()
}
