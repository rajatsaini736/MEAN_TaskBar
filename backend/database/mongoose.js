const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://ashish3342:ashish3342@cluster0.ghpqa.mongodb.net/task-manager?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Databae Connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;  