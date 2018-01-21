const http = require('http');

var port = Number(process.argv[2]) || 3000;

var server = http.createServer((req, res) => {
    if (req.url === '/hello' && req.method === 'GET') {
        res.end('World!');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
})

server.listen(port, () => {
    console.log(`simple-node-server running on port ${port}`);
})