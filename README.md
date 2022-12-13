# Response-Time-for-Server 

> Module for checking the response time of the server for nodejs and browser

## Installation

```sh
$ npm install --save Response-Time-for-Server 
```

## Usage

#### for the node.js/server
```js
const ResponseTimeforServer = require('Response-Time-for-Server ')
```


#### Example
```js
var ResponseTimeforServer = require('Response-Time-for-Server ')

//simple call
ResponseTimeforServer('https://www.youtube.com/')
    .then(responseTime => {
        console.log(`The Response time is : ${responseTime}`)
    })

    //call with additional parameters
ResponseTimeforServer('https://www.youtube.com/', {
    timeout: 1000, //maximum waiting time for server response | default: 5000
    responseInCaseError: true //Whether to return the response time of the server in case of an error | default: true
})
    .then(responseTime => {
        console.log(`The Response time is : ${responseTime}`)
    })

```

## License

MIT © [saidelhabhab](https://github.com/saidelhabhab/response-time-for-server)