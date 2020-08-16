const express = require('express');
const router = express.Router();
const messageController = require('../controller/message');
const auth = require('../lib/auth');

router.get('/', (req, res) => {
  res.json('Api routes working');
});

router
  .route('/msg')
  .get(auth, messageController.index)
  .post(messageController.new);
router
  .route('/msg/:message_id')
  .get(auth, messageController.view)
  .patch(auth, messageController.update)
  .put(auth, messageController.update)
  .delete(auth, messageController.delete);

module.exports = router;
