const express = require('express');
const path = require('path');//path module for including static files using express to the web page using request
const app = express();
// setting up server in express
app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/', (req, res) => {
    // res.send('hello world from express');
    res.sendFile(path.join(__dirname,'static','index.html'));

});
app.listen(3000);