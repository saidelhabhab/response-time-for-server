
const isBrowser = require('./isBrowser')
module.exports = isBrowser() ? require('./lib/browser') : require('./lib/node')

ResponseTimeforServer('https://www.youtube.com/')
    .then(responseTime => {
        console.log(`The Response time is : ${responseTime}`)
    })