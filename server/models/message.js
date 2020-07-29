const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  email: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
});

const Message = (module.exports = mongoose.model('Message', MessageSchema));
module.exports.get = (callback, limit) => {
  Message.find(callback).limit(limit);
};
