// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b99be229e7d3c8314d97bdf')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //    _id: new ObjectID('5b99bf6c6a7e4c1d0cdd96a5')
    // }, {
    //     $set: {
    //         name: 'Maysa'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(response => {
    //     console.log(response);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b99bf6c6a7e4c1d0cdd96a5')
    }, {
        $set: {
            name: 'Maysa'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(response => {
        console.log(response);
    });

    //client.close();
});