require('dotenv').config()
const express = require('express');
const PORT=process.env.PORT
const app=express()
const db=require('./configs/mongoose')
const productRoutes=require('./Routes/productsRoutes')
const bodyParser = require('body-parser');
db()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', productRoutes);

app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error in server listening :-${err}`);
        return;
    }
    console.log(`Server listening at http://localhost:${PORT}`)
});