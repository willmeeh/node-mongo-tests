// const MongoClient = require("mongodb").MongoClient;

//cria uma variavel com o mesmo nome da chave de outro objeto, e herda seu conteudo
const { MongoClient, ObjectID } = require("mongodb");

// console.log(require("mongodb"));

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongoDB server!");
    }
    console.log("Connected to mongoDB server!");

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });   

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result)
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result)
    // });


    db.collection('Users').deleteMany({
        name: 'Will'
    }).then((result) => {
        console.log(result);
    });  

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('598fa5578de8a833fe60805e')
    }).then((result) => {
        console.log(result);
    });  

    // db.close();
});