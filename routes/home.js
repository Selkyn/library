const express = require('express');
const router = express.Router();

const homeCtrl = require('../controller/homeCtrl');

router.get('/', homeCtrl.getHomeData);

module.exports = router;
