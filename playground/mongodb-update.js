const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return  console.log('Unable to connect to MongoDb server')
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');


//  db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5ab8bf29f59c205639252179')},
//  {$set:{ completed:false}},
//  {returnOriginal:false}).then((result)=>{
//     console.log(result)
// })

db.collection('Users').findOneAndUpdate({_id:new ObjectID('5ab8c1e2f59c20563925217b')},
{
    $set:{ name:'Michael'},$inc:{ age:2}
},
 
{returnOriginal:false}).then((result)=>{
   console.log(result)
})

//client.close()
 });
