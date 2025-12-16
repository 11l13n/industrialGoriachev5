const express = require('express');
const router = express.Router();
const controller = require('../controllers/counterController');

router.get('/', controller.getCount);
router.post('/increment', controller.increment);
router.put('/set', controller.setCount);
router.delete('/reset', controller.reset);

module.exports = router;
