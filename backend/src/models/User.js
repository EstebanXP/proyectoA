const { Schema, model } = require('mongoose');

const User = new Schema({
    email: String,
    password: String,
    name: String,
    address: String
},{
    timestamps: true
});

module.exports = model('Users',User);

