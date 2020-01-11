const users = require('../controller/users')

module.exports = (method, req, res) => {
    users[method](method, req, res)
        // users.post(data, res)
        // res.write(`method${method}`)
        // res.end('data')

}