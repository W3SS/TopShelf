'use strict';

var express = require('express');
var controller = require('./guild.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/roster/battlenet', controller.qBattlenet);

module.exports = router;