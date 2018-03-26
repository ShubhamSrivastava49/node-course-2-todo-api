const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return  console.log('Unable to connect to MongoDb server')
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');

//   db.collection('Todos').deleteMany({text:'testing app'}).then((result)=>{
//       console.log(result)
//   })

//   db.collection('Todos').deleteOne({text:'first Record'}).then((result)=>{
//     console.log(result)
// })

//    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//      console.log(result)
//    })
 db.collection('Todos').findOneAndDelete({
    _id:new ObjectID('5ab8a1cdd713232db8230815')
    }).then((result)=>{
          console.log(JSON.stringify(result,undefined,2))
        })

   //client.close()
 })
