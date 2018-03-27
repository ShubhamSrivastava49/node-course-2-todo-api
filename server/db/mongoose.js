var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports.mongoose = { mongoose }

   
//In ES6 if you have propoerty and variable with same name then this is accepted
 //  {mongoose:mongoose} --> {mongoose}