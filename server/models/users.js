var mongoose = require('mongoose');


var User = mongoose.model('User',{
    email:{
         type:String,
         required:true,
         minlength:1,
         trim:true //removes leading or trailing spaces
 
    }
    
 })

 var newUser = new User({
    email:'  abc@gmail.com  ',
    minlength:1
  })

    newUser.save().then((doc)=>{
        console.log(`Email ${doc}`)
    },(e)=>{
      console.log('unable to save todo',e)
    });
    
    module.exports = { User }