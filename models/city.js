const { mongoose, db } = require('../database');
City = db.model('City', {name: String});

module.exports = City;
