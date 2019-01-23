var t = require('tap')
const { build } = require('../helper')

t.test('user', async t => {
  const fastify = build(t)
  t.tearDown(() => {
    fastify.close()
    fastify.firebase.app().delete()
  })
  t.plan(1)

  const EMAIL = 'yanuwid@gmail.com'
  const PASSWORD = 'testes'

  const regRes = await fastify.inject({
    method: 'POST',
    url: '/register',
    headers: {
      'Content-type': 'application/json'
    },
    payload: JSON.stringify({
      email: EMAIL,
      password: PASSWORD
    })
  })
  t.equal(regRes.statusCode, 200, regRes.payload)

  // t.test('register', async t => {
  //   t.plan(1)

  // const loginRes = await fastify.inject({
  //   method: 'POST',
  //   url: '/login',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   payload: JSON.stringify({
  //     email: EMAIL,
  //     password: PASSWORD
  //   })
  // })
  // t.equal(loginRes.statusCode, 200, loginRes.payload)

  // const regRes = await fastify.inject({
  //   method: 'POST',
  //   url: '/register',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   payload: JSON.stringify({
  //     email: EMAIL,
  //     password: PASSWORD
  //   })
  // })
  // t.equal(regRes.statusCode, 200, regRes.payload)

  // const payload = await JSON.parse(loginRes.payload)
  // const accessToken = payload.user.stsTokenManager.accessToken
  // // console.log('accessToken->', accessToken)

  // const getMeRes = await fastify.inject({
  //   method: 'GET',
  //   url: '/me',
  //   headers: {
  //     'Content-type': 'application/json',
  //     'Authorization': 'Bearer ' + accessToken
  //   }
  // })
  // t.equal(getMeRes.statusCode, 200, getMeRes.payload)
  // })
})
