
const FIREBASE_CLIENT_OPTIONS = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_DATABASE_URL',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID'
]

const schema = {
  type: 'object',
  required: [ 'PORT', ...FIREBASE_CLIENT_OPTIONS ],
  properties: {
    PORT: { type: 'string', default: 3000 },
    FIREBASE_API_KEY: { type: 'string' },
    FIREBASE_AUTH_DOMAIN: { type: 'string' },
    FIREBASE_DATABASE_URL: { type: 'string' },
    FIREBASE_STORAGE_BUCKET: { type: 'string' },
    FIREBASE_MESSAGING_SENDER_ID: { type: 'string' }
  }
}

module.exports = {
  schema
}
