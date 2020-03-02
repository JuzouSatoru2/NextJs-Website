const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json('Api routes working');
});

// Api route post template (message=json post)
// router.post('/post', (req, res) => {
//     res.json(req.body.message);
// });

module.exports = router;