const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = (module.exports = mongoose.model('Message', MessageSchema));
module.exports.get = (callback, limit) => {
  Message.find(callback).limit(limit);
};
