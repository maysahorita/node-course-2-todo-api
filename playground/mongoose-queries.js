const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mogoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id= '5b9e54d84d24f12cdc84bb2e';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch(err => {
//     console.log(err);
// });

const userId = "5b9c47f1661fb0003b7130d9";

User.findById(userId).then(user => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log('User by Id', user);
}).catch(err => {
    console.log(err);
});