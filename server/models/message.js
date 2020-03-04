const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    }
});

const Message = module.exports = mongoose.model('Message', MessageSchema);
module.exports.get = function (callback, limit) {
    Message.find(callback).limit(limit);
}