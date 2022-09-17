const http = require('http');

const data = JSON.stringify({
  title: 'title',
  body: 'body'
})

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Authorization':'secretpassword'
  }
}

const request = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += "" + chunk; })
  res.on('end', () => { console.log('response', body) })
  res.on('close', () => { console.log('Closed connection') })
})

request.end(data);
