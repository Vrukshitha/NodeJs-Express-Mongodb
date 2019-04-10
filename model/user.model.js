var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName: String,   
    lastName : String, 
    age : Number
})
module.exports = mongoose.model('Consumer', schema)
