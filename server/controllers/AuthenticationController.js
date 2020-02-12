var {
    User
} = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser(user) {
    return  jwt.sign(user, config.JWT.JWT_SECRET_KEY, {
        expiresIn: config.JWT.EXP
    })
}

module.exports = {
    async login(req, res) {
        res.send({
            user: JSON.parse(JSON.stringify(req.user)),
            isAuthenticated: req.isAuthenticated()
        })

    },
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user);
        } catch (err) {
            res.status(400).send({
                error: err.message
            });
        }
    },
    async logout(req, res) {
        req.logout();
        res.sendStatus(200);

    }
}