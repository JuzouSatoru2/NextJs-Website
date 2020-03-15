const Message = require('../models/message.js');

exports.index = (req, res) => {
    Message.get((err, message) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Messages retrieved successfully",
            data: message
        });
    });
};
exports.new = (req, res) => {
    var message = new Message();
    message.name = req.body.name;
    message.message = req.body.message;
    message.save((err) => {
        if (err) {
            res.json({
                status: "error",
                omessage: err,
            });
        }
        res.json({
            omessage: 'New message created!',
            data: message
        });
    });
};
exports.view = (req, res) => {
    Message.findById(req.params.message_id, (err, message) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            omessage: 'Message details loading..',
            data: message
        });
    });
};
exports.update = (req, res) => {
    Message.findById(req.params.message_id, (err, message) => {
        if (err) { res.send(err); }
        message.name = req.body.name;
        message.message = req.body.message;
        message.save((err) => {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            res.json({
                omessage: 'Message Info updated',
                data: message
            });
        });
    });
};
exports.delete = (req, res) => {
    Message.deleteOne({
        _id: req.params.message_id
    }, (err, message) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            omessage: 'Message deleted'
        });
    });
};