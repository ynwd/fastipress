module.exports = function (fastify, opts, next) {
  fastify
    .register(require('./root'))
    .register(require('./example'))
    .register(require('./users'))
    .after(err => {
      if (err) throw err
    })

  next()
}
