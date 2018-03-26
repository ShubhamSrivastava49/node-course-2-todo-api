//const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj)

//ES 6 object destructuring
var user = {name:'andrew',age:25};
var {name} = user

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return  console.log('Unable to connect to MongoDb server')
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');



//   db.collection('Todos').insertOne({
      
//       text:'first Record',
//       completed :false
//   },(err,result)=>{
//       if(err){
//           return console.log('unable to insert')
//       }
//        console.log(JSON.stringify(result.ops,undefined,2))
//       //result.ops is an array of all the documents that got inserted
//       //console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
      
//   })
   client.close()
 })
