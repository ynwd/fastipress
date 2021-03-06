'use strict'

/*
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
      required: [ 'userId' ],
      properties: {
        userId: { type: 'string' }
      },
      additionalProperties: false
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
*/

const example = {
  params: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
        pattern: '^[0-9a-fA-F]{24}'
      }
    }
  }
}

module.exports = {
  example
}
