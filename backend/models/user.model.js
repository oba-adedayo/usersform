const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phoneNumber:Number,
    Gender:String,
    RelStatus:String,
    fv:String,
    bv:String,
    DOB:String,
    SSN:Number,
    Forpic:String 

})
const userModel = mongoose.model('user', userSchema);
module.exports = userModel