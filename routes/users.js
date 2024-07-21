const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller');

router.get('/profile',passport.checkAuthentication, userController.Profile);
router.get('/signup',userController.signup);

router.post('/create',userController.create);


module.exports = router;