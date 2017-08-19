const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        return res.send(doc);
    }, (e) => {
        return res.status(400).send(e);
    });

    console.log(req.body);
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {

        return res.send({
            todos,
            code: 'asdf'
        });
    }, (e) => {
        return res.status(400).send(e);
    })
});


app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send("Id is not valid");
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send("Todo not found");
        }

        res.send({ todo });
    }).catch((e) => {
        return res.status(400).send(e);
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send("Id is not valid");
    }

    Todo.findOneAndRemove({ _id: id }).then((todo) => {
        if (!todo) {
            return res.status(404).send("Todo not removed");
        }

        return res.send({ todo });
    }).catch((e) => {
        return res.status(400).send(e);
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send("Id is not valid");
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send("Todo not removed");
        }

        return res.send({ todo });
    }).catch((e) => {
        return res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});