'use strict'

const userProfileOutput = {
  type: 'object',
  require: [ '_id', 'username' ],
  properties: {
    _id: { type: 'string' },
    username: { type: 'string' }
  }
}

const registration = {
  // This jsonschema will be used for data validation
  body: {
    type: 'object',
    required: [ 'email', 'password' ],
    properties: {
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    additionalProperties: false
  },
  response: {
    // The 200 body response is described
    // by the following schema
    200: {
      type: 'object',
      properties: {
        uid: { type: 'string' },
        email: { type: 'string' },
        emailVerified: {type: 'boolean'},
        displayName: { type: 'string' },
        photoURL: { type: 'string' },
        phoneNumber: { type: 'string' },
        disabled: { type: 'boolean' },
        metadata: { 
          type: 'object',
          properties: {}
        }
      }
    }
  }
}

const login = {
  body: {
    type: 'object',
    require: [ 'email', 'password' ],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' }
    },
    additionalProperties: false
  },
  response: {
    200: {
      type: 'object',
      require: [ 'jwt' ],
      properties: {
        jwt: { type: 'string' }
      },
      additionalProperties: false
    }
  }
}

const search = {
  querystring: {
    type: 'object',
    require: [ 'search' ],
    properties: {
      search: { type: 'string' }
    },
    additionalProperties: false
  },
  response: {
    200: {
      type: 'array',
      items: userProfileOutput
    }
  }
}

const getProfile = {
  params: {
    type: 'object',
    required: ['userId'],
    properties: {
      userId: {
        type: 'string',
        pattern: '^[0-9a-fA-F]{24}'
      }
    }
  },
  response: {
    200: userProfileOutput
  }
}

module.exports = {
  registration,
  login,
  search,
  getProfile
}
