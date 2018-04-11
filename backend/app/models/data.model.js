const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    title: {
        type : String, 
        require : "Please enter title"
    },
    des : String,
    content: String,
    f1: String
})
module.exports = mongoose.model('Data', DataSchema);