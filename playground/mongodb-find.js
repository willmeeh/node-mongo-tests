// const MongoClient = require("mongodb").MongoClient;

//cria uma variavel com o mesmo nome da chave de outro objeto, e herda seu conteudo
const { MongoClient, ObjectID } = require("mongodb");

// console.log(require("mongodb"));

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongoDB server!");
    }
    console.log("Connected to mongoDB server!");

    // db.collection('Todos').find({
    //     _id: new ObjectID('598fab8615742ce8dfd3f53a')
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 4));

    // }, (err) => {
    //     console.log("Unable to find Todos", err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to find Todos", err)
    // });

    db.collection('Users').find({
        name: 'Will'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));

    }, (err) => {
        console.log("Unable to find Users", err)
    });

    // db.close();
});