const { isTrueBoolean } = require('./helpers')

const config = {
  env: process.env.NODE_ENV || process.env.ENV || 'development',
  port: process.env.PORT || 3000,
  logger: {
    enable: isTrueBoolean(process.env.LOGGER_ENABLE) || true
  },
  mongodb: {
    uri: process.env.MONGO_DATABASE_URI || 'mongodb://127.0.0.1/se-valentine'
  }
}
const isProduction = (config.env === 'production')
const isLoggerEnable = (config.logger.enable === true)

module.exports = {
  ...config,
  isProduction,
  isLoggerEnable
}
