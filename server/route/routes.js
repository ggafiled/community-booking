const passport = require('passport');
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const EnsureController = require('../controllers/EnsureController');

module.exports = (app) => {
    app.post("/login", passport.authenticate('local_login'),AuthenticationController.login);
    app.get("/logout",AuthenticationController.logout);
    app.post("/register", AuthenticationControllerPolicy.register, AuthenticationController.register);
    app.get('/dash',require('connect-ensure-login').ensureLoggedIn(),EnsureController.dash);
}