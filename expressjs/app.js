const config = require('./config/config');
const express = require('express');
const app = express();
require('./config/express')(app)

const api = express.Router();
app.use('/api', api);
require('./routes/index')(api);

process.on('uncaughtException', (error) => console.log("Process UncaughtException", error));

process.on('exit', (code) => console.log("Process Exit", code));

app.listen(config.port, () => {
    console.log(`Express App Server listening on port : ${config.port} Environment: ${app.get('env')} Process ID: ${process.pid}`);

});


app.get('/', (req, res) => res.send('Hello World!'));