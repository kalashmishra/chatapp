var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/google");
var userSchema = mongoose.Schema({
    name: String,
    email: String,
   
            
    
    
})
module.exports = mongoose.model('user', userSchema);
