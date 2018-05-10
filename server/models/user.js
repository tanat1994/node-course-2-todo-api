var mongoose = require('mongoose');
//User
//email - required - trim - type string - min 1
var User = mongoose.model('users', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {
  User: User
};
//Export property
