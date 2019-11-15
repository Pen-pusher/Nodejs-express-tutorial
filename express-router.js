// creating our own middleware function and how to use it
// middleware function can modify the request and the response object
// so whenever a request is made by the user this middleware is gonna work by printing out the route and the type of request user made
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const route = require('./routes/route');
app.use('/routes', route);
// req = request, res = response
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//     console.log(req.url, req.method);
//     next();
// });
// app.get('/', (req, res) => {
//     res.send('hello world from your custom middleware');
//     // res.sendFile(path.join(__dirname, 'static', 'userinput-validation-express.html'));

// });

app.listen(3000);