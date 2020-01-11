const http = require('http');

const hander = require('./handler')
const server = http.createServer(hander.handleReq)
server.listen(3000, () => console.log('server is connected'))