const app = require('./config/express');
const mongoose = require('mongoose');
const logger = require('./config/logger')(module);
const config = require('./config/config');

const dbUrl = config.isTest
  ? config.db.test.host
  : config.db.host;

mongoose.Promise = global.Promise;

mongoose.connect(dbUrl, {useMongoClient: true});

mongoose
  .connection
  .on('error', err => logger.error('Unable to connect to MongoDB:', err.message));

app.listen(config.port, () => {
  logger.info(`Running on ${config.env} mode`);
  logger.info(`Todo server listening on port ${config.port}.`);
});

module.exports = {
  app
};
