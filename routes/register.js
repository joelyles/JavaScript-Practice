// practice server using Dave Gray node tutorial

const express = require('express');
const router = express.Router();
const userRegistration = require('../controllers/userRegistration');

router.post('/', userRegistration.handleNewUser);

module.exports = router;