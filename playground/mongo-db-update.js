// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
        return console.log("unable to connect to database server.")
    }
    console.log("connected to database server")

    // findOneAndUpdate()
    db.collection("Todos")
    .findOneAndUpdate(
        {_id: new ObjectID("5b1f8f01fb635a44ded0c62a")},
        {set:{completed:true}},
        {returnOriginal:false}
    )
    .then((result)=>{
        console.log(result)
    })
    // db.close();
});