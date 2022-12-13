# Response-Time-for-Server 

> Module for checking the response time of the server for nodejs and browser

## Installation

```sh
$ npm install --save Response-Time-Server 
```

## Usage

#### for the node.js/server
```js
const ResponseTimeServer = require('Response-Time-Server ')
```


#### Example
```js
var ResponseTimeServer = require('Response-Time-Server ')

//simple call
ResponseTimeServer('https://www.google.com/')
    .then(responseTime => {
        console.log(`The Response time is : ${responseTime}`)
    })

    //call with additional parameters
ResponseTimeServer('https://www.youtube.com/', {
    timeout: 1000, //maximum waiting time for server response | default: 5000
    responseInCaseError: true //Whether to return the response time of the server in case of an error | default: true
})
    .then(responseTime => {
        console.log(`The Response time is : ${responseTime}`)
    })

```
#### starting 

```js
"start": "nodemon index.js"
```

## License

MIT © [saidelhabhab](https://github.com/saidelhabhab/response-time-server)