const express = require('express')
const router = express.Router();
const {register, login, findUser, deleteUser} = require('../controller/userController');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/findUser').get(findUser);
router.route('/deleteUser').delete(deleteUser);


module.exports = router;