const {
  login,
  registration
  // search: searchSchema,
  // getProfile: getProfileSchema
} = require('./schemas')

module.exports = async function (fastify, opts) {
  fastify.post('/login', { schema: login }, loginHandler)
  fastify.post('/register', { schema: registration }, registerHandler)

  fastify.register(async function (fastify) {
    fastify.addHook('preHandler', fastify.authPreHandler)
    // fastify.get('/:userId', { schema: getProfileSchema }, userHandler)
    // fastify.get('/search', { schema: searchSchema }, searchHandler)
  })
}

async function registerHandler (request, response) {
  let res = await this.admin.auth().createUser(request.body)
  return res
}

async function loginHandler (request, response) {
  const { email, password } = request.body
  let res = await this.client.auth().signInWithEmailAndPassword(email, password)
  response.send(JSON.stringify(res))
}

// async function meHandler (request, response) {
// if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
//   console.log('Found "Authorization" header')
//   idToken = request.headers.authorization.split('Bearer ')[1]
// }

// // const { credential } = request.headers
// console.log('request.headers-->', request.headers)
// let res = await this.firebase.User
// console.log('res->', res)
// response.send(JSON.stringify(res))
// }
