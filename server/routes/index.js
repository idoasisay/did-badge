const express = require('express');
const router = express.Router();

router.get('/', (res, req) => req.send('first page test'));

module.exports = router;
