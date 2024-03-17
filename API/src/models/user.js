const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contra: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('User', userSchema);