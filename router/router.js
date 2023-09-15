const express = require('express');
const router = express.Router();
var socket = require('../api/socketAPI.js'); 
// const view = require('../views/index.html');
var login = require('../api/login.js');
// router.use('/',authCheck);
var auth = require('../api/auth.js');
var qr = require('../api/qr.js');
var tt = require('../api/tt.js');
router.use('/',socket);
router.use('/login',login);
router.use('/auth',auth);
router.use('/qr',qr);
router.use('/tt',tt)
module.exports = router;
