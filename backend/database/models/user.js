const mongoose = require('mongoose');


/* schema */
const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        minlength: 3
    },
    email: {
        type : String,
        minlength: 3
    },
    password: {
        type: string,
        minlength: 3
    }
});

const User = mongoose.model('user-info', UserSchema);

module.exports = User;