const express = require('express');
const { handleWebhook } = require('../controllers/webhookController');

module.exports = (io) => {
  const router = express.Router();

  // Pass the io instance to the controller
  router.post('/one-drive', (req, res) => handleWebhook(req, res, io));

  return router;
};
