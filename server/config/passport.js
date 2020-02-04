const LocalStrategy = require("passport-local").Strategy;
var { User } = require('../models');

module.exports = function (passport) {

    passport.use('local_login', new LocalStrategy({
        usernameField: 'u_email',
        passwordField: 'u_pwd',
        passReqToCallback: true
    }, async (req, username, password, done) => {
        if (!username || !password) {
            return done(null, false, req.flash('message', 'All fields are required.'));
        }

        const user = await User.findOne({
            where: {
                u_email: username
            }
        });

        if (!user) {
            return done(null, false, {
                error: 'The login information was incorrect'
            });
        }

        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return done(null, false, {
                error: 'The login information was incorrect'
            });
        }
        return done(null, user.toJSON());
    }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(async function (user, done) {
        const _user = await User.findOne({
            where: {
                u_email: user.u_email
            }
        });
        done(null, _user);
    });

}