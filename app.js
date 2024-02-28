const Express = require('express');
const app = Express();
const part = require('path');
const port = 3000;

app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
});

app.listen(port,()=>{
    console.log('listen on port :',port)
});