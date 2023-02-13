const mongoose = require('mongoose')

const clientSchmea = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const Client = mongoose.model('Client',clientSchmea);

module.exports = Client;