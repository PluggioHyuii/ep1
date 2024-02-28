const Express = require('express');
const app = Express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello hello test')
});

app.listen(port,()=>{
    console.log('listen on port :',port)
});