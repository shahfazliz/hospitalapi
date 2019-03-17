const app = require('express')();
const bodyParser = require('body-parser');
const PackageRouter = require('./routes/PackageRouter');
const port = '8050';
require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use('/api', ApiRouter);

app.listen(port, function () {
    console.log('listening on http port: ' + port);
});

PackageRouter(app);