const express = require('express');
const router = express.Router();
const messageController = require('../controller/message');

router.get('/test', (req, res) => {
    res.json('Api routes working');
});

router.route('/msg')
    .get(messageController.index)
    .post(messageController.new);
router.route('/msg/:message_id')
    .get(messageController.view)
    .patch(messageController.update)
    .put(messageController.update)
    .delete(messageController.delete);

module.exports = router;