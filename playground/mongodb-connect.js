// const MongoClient = require("mongodb").MongoClient;

//cria uma variavel com o mesmo nome da chave de outro objeto, e herda seu conteudo
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongoDB server!");
    } 
    console.log("Connected to mongoDB server!");

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable insert to do', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Will',
    //     age: 22,
    //     location: 'here'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});