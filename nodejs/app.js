/**
 * This app reads data from a JSON file and displays on browser
 */
const http = require('http');
const path = require('path');
const file = require('./file_util');

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    file.readFile('employees.json').then((data) => {
        resp.write(data);
        resp.end();
    });
});

server.listen(3000, () => {
    console.log('Up and serving...')
});
