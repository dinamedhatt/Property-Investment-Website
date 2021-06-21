const mongoose=require('mongoose')
var bcrypt = require('bcryptjs');
 
const UserSchema=new mongoose.Schema({
fname:{
    type:String,
    required:true
},
lname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
occupation:{
    type:String
    
},
image:{
    type:String
},
address:{
    type:String,
    required:true
},
property:{
    type:Array
}
})

UserSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});
 
const User=mongoose.model('User',UserSchema)
module.exports=User