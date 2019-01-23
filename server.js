const log = require('pino')({ level: 'error', prettyPrint: true })
const fastify = require('fastify')({ logger: log })
require('dotenv').config()

const start = async () => {
  try {
    fastify
      .register(require('fastify-env'), { schema: require('./schemas').server })
      .register(require('./app'))
    await fastify.ready()
    await fastify.listen(fastify.config.PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
