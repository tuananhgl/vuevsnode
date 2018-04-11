const User = require('../models/user.model');
exports.create = (req,res) => {
    if(!req.body.username || !req.body.password) {
        res.status(404).send({
            message : "User or Password can not be null"
        })
    }
    const userData = new User({
        title: req.body.title,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        token: "qweqweqweqwewq"
    });
    userData.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: message.err || "Can not be save into database"
            })
        })
}

exports.findUser = (req,res) => {
    User.find({"username" : req.params.username, "password" : req.params.password}).limit(1)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Can not found user with id "+req.params.username
                })
            }
            delete data[0].password
            console.log(data)
        })
        .catch(err => {
            if(err.kind == 'ObjectId') {
                return res.status(404).send({   
                    message: "Can not found user with id "+req.params.username
                })
            }
            res.status(500).send({
                message : "Can not treviewing data"
            })
        })
}