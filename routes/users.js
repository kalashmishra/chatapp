var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mishrakalash407:mongodbconnect@cluster1.bgkup3d.mongodb.net/?retryWrites=true&w=majority");
var userSchema = mongoose.Schema({
    name: String,
    email: String,
   
            
    
    
})
module.exports = mongoose.model('user', userSchema);
