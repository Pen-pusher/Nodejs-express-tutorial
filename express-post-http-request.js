const express = require('express');
const path = require('path');//path module for including static files using express to the web page using request
const bodyParser = require('body-parser');
const app = express();
// setting up server in express
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false})); 
// urlencoded is encoding our form data
app.get('/', (req, res) => {
    // res.send('hello world from express');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));

});
// we use body-parser package to encode our form based data  
app.post('/',(req,res)=>{
    console.log(req.body);
    //database work here
    res.send('sucessfully posted data')
})

app.listen(3000);