const app = require('express')();
const bodyParser = require('body-parser');
const ApiRouter = require('./routes/ApiRouter');
const port = '8050';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', ApiRouter);

app.listen(port, function () {
    console.log('listening on http port: ' + port);
});
