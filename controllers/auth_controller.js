const UserModel = require("./../database/models/user_model");

function register(req, res, next) {
    const { email, password } = req.body;

    UserModel.register({ email }, password, function(err, user) {
       if (err) { 
           return next(err)
        }
      
        
    });
}

module.exports = {
    register
}