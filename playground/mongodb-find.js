//const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return  console.log('Unable to connect to MongoDb server')
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');

//   db.collection('Todos').find({
//          _id :new ObjectID('5ab8b13df59c205639252177')
//     //   _id :'5ab8b13df59c205639252177'  --->this wont work
// }).toArray().then((docs)=>{
//    console.log(JSON.stringify(docs,undefined,2))
//   },(err)=>{
//       console.log('unable to fetch todos',err)
//   });
//    db.collection('Todos').find().count().then((count)=>{
//           console.log(`Todos count,${count}`)
//        },(err)=>{
//            console.log('unable to fetch todos',err)
//        });
 
db.collection('Todos').find({text:'first Record'}).toArray().then((rec)=>{
              console.log(`Todos found with text first Record,${JSON.stringify(rec,undefined,2)}`)
           },(err)=>{
               console.log('unable to fetch todos',err)
           });


   //client.close()
 })
