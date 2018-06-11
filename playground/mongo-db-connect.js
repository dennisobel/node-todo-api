// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
        return console.log("unable to connect to database server.")
    }
    console.log("connected to database server")

    // db.collection("Todos").insertOne({
    //     test:"Meet The Lone Wolf",
    //     completed:false
    // },(e,result)=>{
    //     if(e){
    //         return console.log('unable to insert todo',e)
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    // db.collection("Users").insertOne({
    //     name:"Dennis Obel",
    //     age:29,
    //     location:"Aniversary Towers"
    // },(err,result)=>{
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())
    // })
    db.collection("Todos").insertOne({
        text:"Walk Dog",
        completed: true 
    },(err,result)=>{
        if(err){
            return console.log(err)
        }
        console.log(result)
    })    
    db.close()
});