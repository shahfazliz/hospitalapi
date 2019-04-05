const app = require('express')();
const bodyParser = require('body-parser');
const ApiRouter = require('./routes/ApiRouter');
const hostname = process.env.IP; // '127.0.0.1';
const port = 8081; // process.env.PORT; // '8050';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/api', ApiRouter);

app.listen(port, function () {
    console.log('listening on http port: ' + port);
});
