var User = require('../models/user');

// Render all users
module.exports.list = function (req, res, next) {
  User.find({})
      .exec(function (err, users) {
        if (err) { return next(err); }

        res.render('template/user_list', { users: users });
      });
}

// Get user by ID
module.exports.get = function (req, res, next) {
  User.find({})
      .exec(function (err, users) {
        if (err) { return next(err); }

        res.render('template/user_list', { users: users });
      });
}

// Create User
module.exports.create = function (req, res, next) {
  
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username }, function (err, user) {

    if (err) { return next(err); }

    if (user) {
      req.flash('error', "User already exists");
      return res.redirect('/signup');
    }

    var newUser = new User({
      username: username,
      password: password
    });

    newUser.save(function (err) {
      if (err) { return next(err); }

      res.redirect('/');
    });

  });

}

// SignUp form
module.exports.signupForm = function (req, res, next) {
  res.render('forms/user_signup', { title: 'signup' });
}