const mongoose = require('mongoose');


/* schema */
const ListSchema = new mongoose.Schema({
    title: {
        type : String,
        minlength: 3
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;