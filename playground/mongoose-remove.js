const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all items from collection
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: 'askldjwalkjlksjd'}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('599898a2d892e73752adb97c').then((result) => {
    console.log(result);
});
