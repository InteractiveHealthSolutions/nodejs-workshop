const express = require('express');
const app = express();
require('./config/express')(app)

app.set('view engine', 'ejs')
const api = express.Router();
// app.use('/api', api);
require('./routes/users')(app);

process.on('uncaughtException', (error) => console.log("Process UncaughtException", error));


app.listen(3000, () => {
    console.log(`Express App Server listening on port 3000`);

});


app.get('/', (req, res) => res.render('index'));