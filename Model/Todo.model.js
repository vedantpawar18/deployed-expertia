const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    Todo : {type : String, required : true},
    userId : {type : String, required : true},
    day: {type : Number, required : true},
    month: {type : Number, required : true},
    year : {type : Number, required : true},
})

const TodoModel = mongoose.model("todo", todoSchema)


module.exports = {
    TodoModel
}