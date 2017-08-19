const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '698fcbd0a3e08f4ca0776128';

// if (!ObjectID.isValid(id)){
//     console.log("ID not valid"); 
// };

// // Retorna um array 
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// // Retorna um objeto 
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id',todo);
// }).catch((e) => console.log(e));


User.findById('598fcfb39bce034e932d4eeb').then((user) => {
    if (!user) {
        console.log('Unable to find user');
    }
    
    console.log(JSON.stringify(user, undefined, 4));
}, (e) => {
    console.log(e);
});