const {
  login: loginSchema,
  registration: registrationSchema
  // search: searchSchema,
  // getProfile: getProfileSchema
} = require('./schemas')

module.exports = async function (fastify, opts) {
  fastify.post('/login', { schema: loginSchema }, loginHandler)
  fastify.post('/register', { schema: registrationSchema }, registerHandler)

  fastify.register(async function (fastify) {
    fastify.get('/me', meHandler)
    // fastify.get('/:userId', { schema: getProfileSchema }, userHandler)
    // fastify.get('/search', { schema: searchSchema }, searchHandler)
  })
}

async function registerHandler (request, response) {
  // const { email, password } = request.body
  let res = await this.firebase.auth().createUser(request.body)
  response.send(JSON.stringify(res))
}

async function loginHandler (request, response) {
  const { email, password } = request.body
  let credential = await this.firebase.credential(email, password)
  let res = await this.firebase.signInAndRetrieveDataWithCredential(credential)
  response.send(JSON.stringify(res))
}

async function meHandler (request, response) {
  // if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
  //   console.log('Found "Authorization" header')
  //   idToken = request.headers.authorization.split('Bearer ')[1]
  // }

  // // const { credential } = request.headers
  // console.log('request.headers-->', request.headers)
  // let res = await this.firebase.User
  // console.log('res->', res)
  // response.send(JSON.stringify(res))
}
