const log = require('pino')({ level: 'error', prettyPrint: true })
const fastify = require('fastify')({ logger: log })
require('dotenv').config()

const start = async () => {
  try {
    fastify
      .register(require('./app'))
    await fastify.ready()
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
