const http = require('http')

const server = http.createServer()
    // server.on('')
server.on('connection', function(req, res) {
    console.log('req reached====');
    res.write('you request heard');
    res.end()
})
server.listen(3000, () => {
    console.log('server is up!!')
})