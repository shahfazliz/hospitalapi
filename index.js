const app = require('express')();
const bodyParser = require('body-parser');
const ApiRouter = require('./routes/ApiRouter');
require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', ApiRouter);

app.listen(process.env.PORT, function () {
    console.log('listening on http port: ' + 8050);
});