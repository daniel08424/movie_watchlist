const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const userController = require('../controllers/user_controller')
const passport = require('passport');
const playlistController = require('../controllers/playlist_controller')


router.get('/home',homeController.home);
router.get('/',userController.signin);
router.use('/users',require("./users"));
router.use('/movies',require("./movies"));
router.get('/home/signout',userController.destroysession);

router.post('/createsession', passport.authenticate(
    'local',
    {failureRedirect: '/'},
), userController.createsession);

router.get('/playlist',playlistController.playlist1);

router.get('/home/profile',passport.checkAuthentication, userController.Profile);

module.exports = router;