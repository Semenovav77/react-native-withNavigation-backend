const express = require('express');
const body = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./core/db');
const personsModule = require('./modules/persons');
const tasksModule = require('./modules/tasks');


app.use(body.json());
app.use(cors());

app.get('/test', function(req, res) {
    /*console.log(req.params)*/
    return res.send('run');
});

app.use('/persons', personsModule);
app.use('/tasks', tasksModule);
/*app.get('/persons', PersonControll.all);
app.post('/persons', validationPerson.create, PersonControll.create);*/
/*app.get('/tasks', TaskControll.all);
app.post('/tasks', validationTask.create, TaskControll.create);*/

const port = process.env.PORT || 3004;

app.listen(port, function() {
    console.log(`Server listening port ${port}`)
});