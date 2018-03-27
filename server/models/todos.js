var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
    text:{
         type:String,
         required:true,
         minlength:1,
         trim:true //removes leading or trailing spaces
 
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
 })
 
 var newTodo_2 = new Todo({
      text:'Done homework',
      completed:true,
      completedAt:new Date().getTime()
 
  })
 
 
  newTodo_2.save().then((doc)=>{
     console.log(`saved second todo ${doc}`)
 },(e)=>{
   console.log('unable to save todo',e)
 });
 
 module.exports = {Todo} 