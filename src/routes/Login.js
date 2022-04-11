const {Router} = require('express');
const router = Router();
const authCtrl = require('../controllers/AuthController');

//rutas login, logout, etc
router.route('/login-test')
    .get(authCtrl.signInCiudadanoTemplate)

module.exports = router;