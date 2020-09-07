const Message = require('../models/message.js');

exports.index = (req, res) => {
  Message.get((err, message) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Messages retrieved successfully',
      data: message,
    });
  });
};
exports.new = (req, res) => {
  if(req.body.email && req.body.name && req.body.message) {
  if (
    /.*\S.*/.test(req.body.email) &&
    /.*\S.*/.test(req.body.name) &&
    /.*\S.*/.test(req.body.message)
  ) {
    var message = new Message();
    message.email = req.body.email;
    message.name = req.body.name;
    message.message = req.body.message;
    message.save((err) => {
      if (err) {
        res.json({
          status: 'error',
          omessage: err,
        });
      }
      res.json({
        omessage: 'New message created!',
        data: message,
      });
    });
  } else {
    res.json({
      status: 'error',
      omessage: 'Not valid inputs!',
    });
  }
} else {
  res.sendStatus(403);
}
};
exports.view = (req, res) => {
  Message.findById(req.params.message_id, (err, message) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Messages retrieved successfully',
      data: message,
    });
  });
};
exports.update = (req, res) => {
  Message.findById(req.params.message_id, (err, message) => {
    if (err) {
      res.send(err);
    }
    message.email = req.body.email;
    message.name = req.body.name;
    message.message = req.body.message;
    message.save((err) => {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      }
      res.json({
        omessage: 'Message Info updated',
        data: message,
      });
    });
  });
};
exports.delete = (req, res) => {
  Message.deleteOne(
    {
      _id: req.params.message_id,
    },
    (err, message) => {
      if (err) {
        res.json({
          status: 'error',
          message: err,
        });
      }
      res.json({
        status: 'success',
        omessage: 'Message deleted',
      });
    }
  );
};
