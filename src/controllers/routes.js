const express = require('express');
const path = require('path');
const router = express.Router();


const login = require('./login');
const register = require('./register');
const roomChat = require('./roomChat');
const logout = require('./logout')
const error = require('./error');


router.get('/', login.get);
router.post('/loginuser', login.post);
router.get('/register', register.get);
router.post('/register/user', register.post);
router.get('/roomChat', roomChat.get);
router.post('/roomChat',roomChat.post);
router.get('/logout',logout.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
