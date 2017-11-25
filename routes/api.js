const { mongoose, db } = require('../database');
const express = require('express');
let router = express.Router();
let Student = require('../models/student');
let City = require('../models/city');

router.get('/students', function (req, res) {
  Student.find().populate('city').then((students) =>{
    res.json(students);
  });
});

router.post('/students', function (req, res) {
  let student = req.body.name;
  students.push(student);
  res.send(student);
});

router.put('/students/:id', function (req,res) {
  Student.findOneAndUpdate(req.params.id, req.body).populate('city').then((student) =>{
    res.render('student',{student});
  });
});

router.delete('/students/:id', function (req,res) {
  Student.findOneAndDelete(req.params.id).then((student) =>{
    res.render('student',{student});
  });
});

router.get('/cities', function (req, res) {
  City.find().then((cities) =>{
    res.json(cities);
  });
});

router.post('/cities', function (req, res) {
  let city = req.body.name;
  cities.push(city);
  res.send(city);
});

router.put('/cities/:id', function (req,res) {
  City.findOneAndUpdate(req.params.id, req.body).then((city) =>{
    res.render('city',{city});
  });
});

router.delete('/cities/:id', function (req,res) {
  City.findOneAndDelete(req.params.id).then((city) =>{
    res.render('city',{city});
  });
});



module.exports = router;
