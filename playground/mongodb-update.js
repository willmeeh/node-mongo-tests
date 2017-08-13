// const MongoClient = require("mongodb").MongoClient;

//cria uma variavel com o mesmo nome da chave de outro objeto, e herda seu conteudo
const { MongoClient, ObjectID } = require("mongodb");

// console.log(require("mongodb"));

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongoDB server!");
    }
    console.log("Connected to mongoDB server!");

    // //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('598fbf8715742ce8dfd3fb69'),
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('598fa3d4042c2d335e62417b'),
    }, {
        $set: {
            name: "Will"
        },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});