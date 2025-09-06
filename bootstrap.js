const dotenv = require('dotenv');
const {app} = require('./app')
const mongoose = require('mongoose');
const path = require('path')
const connectDB = require('./config/connDB')
const port = process.env.PORT


require('dotenv').config({path : path.join(__dirname, "../.env")})
connectDB()

mongoose.connection.once('connected' ,()=>{
    console.log("MongoDB connected..............");
    app.listen(process.env.PORT,()=>console.log('Server Runing...........'))
})

mongoose.connection.on('error', (err)=>{
    console.log(err);
})


module.exports = {app}