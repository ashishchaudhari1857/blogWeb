const express=require("express");
const app=express();
const bodyParser = require('body-parser');

const AdminRoute= require('./routes/Admin')



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(AdminRoute)
app.use('/' ,(req ,res)=>{
      res.status(404).send("<h1>Page  not found</h1>")
})
app.listen(3000 ,()=>{
  console.log("server-start")
})