// this js file is all about handling user input data server side using express and joi
const express = require('express');
const path = require('path');//path module for including static files using express to the web page using request
const joi = require('joi');
const bodyParser = require('body-parser');
const app = express();
// setting up server in express
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
// urlencoded is encoding our form data
// app.use(bodyParser.json());
app.get('/', (req, res) => {
    // res.send('hello world from express');
    res.sendFile(path.join(__dirname, 'static', 'userinput-validation-express.html'));

});
// app.get serves the form to the user
// app.post post the data after the form has been submitted 
// we use body-parser package to encode our form based data  
app.post('/', (req, res) => {
    console.log(req.body);
    //database work here
    const schema = joi.object().keys({
        email : joi.string().trim().email().required(),
        password : joi.string().min(5).max(10).required()
    });
    joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err)
            res.send('an error has occured');
        }
        
            console.log(result);
            res.send('successfull posted data')
    
    })
    //  res.send('sucessfully posted data')
    // res.json({ sucess: true })
    // here res.json is taking a javascript object and converts it into json
})

app.listen(3000);