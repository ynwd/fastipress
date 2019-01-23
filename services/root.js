'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // console.log('opts->', opts)
    // console.log('someSupport plugin->', fastify.someSupport())
    // console.log(fastify.config)
    return { root: true }
  })
}
