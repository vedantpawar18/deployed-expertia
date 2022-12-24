const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const {Authentification} = require("../Middlewares/Authentication");

const {TodoModel} = require("../Model/Todo.model")

const todoController = Router();


todoController.get("/",Authentification, async (req, res) => {
   const userId = req.body.userId
   const date = new Date();
   const Today=date.getDate();
    const Todo = await TodoModel.find({userId, day:Today})
    console.log(userId, Todo);

    if(Todo.length>0){
        res.send(Todo);
    }
    else{
        res.send("Data not found")
    }
})


todoController.post("/create",Authentification, async (req, res) => {
    const {Todo, userId} = req.body;
    const date = new Date();
    const day=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    const Today=date.getDate();
    const DateData= await TodoModel.find({userId : req.body.userId,day:Today})
    
    const todo = new TodoModel({
        Todo,
        userId,
        day,
        month,
        year
    });

   if(DateData.length<5)
   {
    try{
        await todo.save()
        console.log(DateData.length)
        res.send("note created")
    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }
   }
   else{
    res.send("Daily limit exceeded")
   }
})


module.exports = {
    todoController
}