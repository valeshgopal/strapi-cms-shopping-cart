module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77b2c87dbab4e1697bec244226fbd1b3'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'd9b0df66ff97a666027e665707b4e3e7'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
