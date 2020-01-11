const userCtrl = require('../controller/users')

module.exports = (app) => {

    app.get('/users', userCtrl.get)
}