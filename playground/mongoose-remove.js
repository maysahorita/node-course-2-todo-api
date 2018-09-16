const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mogoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5b9e97580c9e67c70f84e65b'}).then(todo => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5b9e97580c9e67c70f84e65b').then(todo => {
    console.log(todo);
});