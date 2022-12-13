
const isBrowser = require('./isBrowser')


module.exports = isBrowser() ? require('./lib/browser') : require('./lib/node')


