const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    'title' : String,
    'username' : {
        type: String,
        required: "Username can not be"
    },
    'password' : String,
    'email' : String,
    'phone': String,
    'token' : String
})

module.exports = mongoose.model('User',UserSchema);