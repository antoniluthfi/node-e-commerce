const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.json({
        data: 'Test api'
    })
});

module.exports = router;