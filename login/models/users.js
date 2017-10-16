var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    facebook:{
        id:String,
        username:String,
        token:String,
        email:String

    }
});


module.exports = mongoose.model('User',userSchema);

module.exports.findOrCreate = function(user){
    console.log(user)

}
