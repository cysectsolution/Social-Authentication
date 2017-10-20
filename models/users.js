var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    
        id:String,
        name:String,
        token:String,
        email:String,
        photo:String

    
});


module.exports = mongoose.model('User',userSchema);

module.exports.findOrCreate = function(user,cb){
    console.log(user)

}
