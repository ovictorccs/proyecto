var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);

//rutas de usuario
router.get('/auth/signup', controllers.UserController.getSignUp); 
router.post('/auth/signup', controllers.UserController.postSignUp); 
router.get('/auth/signin', controllers.UserController.getSignIn);

module.exports = router;
