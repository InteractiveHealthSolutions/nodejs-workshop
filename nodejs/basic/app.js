const http = require('http');

const hander = require('./handler')
const server = http.createServer()
    // const server = http.createServer((req, res) => {
    //     res.write('data')
    //     res.end()
    // })
server.listen(3000, () => console.log('server is connected'))