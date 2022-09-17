const http = require('http')

const queryParams = {
  page: 2,
  pageSize: 2
};

http.get({ path: `/posts?page=${queryParams.page}&pageSize=${queryParams.pageSize}`, hostname: 'localhost', port: 3000 }, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += "" + chunk })
  res.on('end', () => { console.log('Received data', body) })
  res.on('close', () => { console.log('Connection closed') })
})