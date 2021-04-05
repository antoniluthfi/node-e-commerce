const express = require('express');
const router = express.Router();

// middleware
const { authCheck } = require('../middlewares/auth');

// controllers
const { createOrUpdateUser } = require('../controllers/auth');

router.get('/create-or-update-user', authCheck, createOrUpdateUser);

module.exports = router;