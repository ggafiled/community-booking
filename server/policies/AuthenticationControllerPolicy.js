const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = {
            u_role: Joi.string(),
            u_name: Joi.string(),
            u_email: Joi.string().email(),
            u_pwd: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            u_imgUrl: Joi.string(),
        }

        const {
            error,
            value
        } = Joi.validate(req.body, schema);

        if (error) {
            res.status(400).send({
                error: error.message
            });
        } else {
            next();
        }
    }
}