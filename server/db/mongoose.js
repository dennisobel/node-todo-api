var mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoList');

module.exports = {
    mongoose
}