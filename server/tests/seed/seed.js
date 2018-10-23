const {objectID} = require('mongodb');

const {Todo} = require('./../../models/todo');

const todos = [ { 
    _id: new objectID(),
    text: 'The lord is my refuge'
}, {
    _id: new objectID(),
    text: 'Jesus your love is poured over me',
    completed: true,
    completedAt: 777
}];

const populateTods = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

module.exports = {todos, populateTods}