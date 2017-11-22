const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');
let students = require('./students');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', api);

app.get('/students', function (req, res) {
  res.render('students', {students: students});
});

app.post('/students', function (req, res) {
  let student = req.body.student_name;
  students.push(student);
  res.send(student);
  res.redirect('/students');
});

app.listen(port)
