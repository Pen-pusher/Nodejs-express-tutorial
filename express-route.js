// setting up express
const express = require('express');
const app = express();
// setting up server in express
app.get('/',(req,res)=>{
res.send('hello world from express');

});

app.get('/example',(req,res)=>{
    res.send('i am example')
})

// working with route parameter

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    // console.log(req.query);//it starts with ?name and vale and for multiple we need to us &
    // res.send('hitting example route params')
    res.send(req.params.name + ':' + req.params.age)// writting request.param.name because its an object
})

app.listen(3000); //listen port