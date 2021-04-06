export default () => ({
  port: parseInt(process.env.PORT || '3000'),
  mongo: {
    uri: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    options: {
      expiresIn: '60m',
    },
  },
});
