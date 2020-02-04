module.exports = {
    dash (req,res) {
        res.send({
            message: 'you can access! '+req.user.u_name
        });
    }
}