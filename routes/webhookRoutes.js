const express = require('express');
const { handleWebhook } = require('../controllers/webhookController');
const router = express.Router();

router.post('/one-drive', handleWebhook);

module.exports = router;
