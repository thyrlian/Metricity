const config = {
  server: {
    port: process.env.PORT_BACKEND
  }
};

if (!config.server.port) {
  throw new Error('PORT_BACKEND environment variable is required');
}

module.exports = config;