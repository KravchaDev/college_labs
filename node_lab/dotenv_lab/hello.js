require('dotenv').config()

const http = require('http');

const HOST = process.env.HOST;
const PORT = process.env.PORT;
if (!HOST || !PORT) {
    console.error('[error]: The "HOST" and "PORT" environment variable is required')
    process.exit(1);
}
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"message": "Hello World"}`);
});
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});