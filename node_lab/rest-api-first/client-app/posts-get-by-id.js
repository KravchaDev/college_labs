const http = require('http')

const postId = 1;

http.get({ path: `/posts/${postId}`, hostname: 'localhost', port: 3000 }, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += "" + chunk })
  res.on('end', () => { console.log('Received data', body) })
  res.on('close', () => { console.log('Connection closed') })
})