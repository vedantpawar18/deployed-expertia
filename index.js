const express=require("express");
const {Connection}= require("./Config/db")
const cors= require("cors");
const {todoController} = require("./Routes/Todo.routes");
const {Authentication} = require("./Middlewares/Authentication")

const app= express();
app.use(cors())
app.use(express.json())

var logRouter=require("./Routes/Login.routs");

app.get("/", (req,res)=>{
    res.send("Welcome to homepage")
})

app.use("/auth",logRouter);
// app.use(Authentication) 
app.use("/todos", todoController)

app.listen(8080, async()=>{
   try{
    await Connection;
    console.log("Connected to db")
   }
   catch(err){
    console.log("Error connnecting to DB")
    console.log(err)
   }
   console.log("listening to port 8080")
})