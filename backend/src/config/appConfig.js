const config = {
  server: {
    port: process.env.PORT_BACKEND
  },
  app: {
    name: 'Metricity Server',
    version: '1.0.0'
  }
};

if (!config.server.port) {
  throw new Error('PORT_BACKEND environment variable is required');
}

module.exports = config;