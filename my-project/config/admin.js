module.exports = ({ env }) => ({
  auth: {
    secret: ['2oC7KFaKqvCV1qd4IRWl7g=='],
  },
  apiToken: {
    salt: ['rfnOSQk/XXv9wtUTM6h53g=='],
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
