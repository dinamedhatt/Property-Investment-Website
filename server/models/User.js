const mongoose=require('mongoose')
 
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
    default:"default.png",
    type:String
},
address:{
    type:String,
    required:true
},
property:{
    type:Array
},
wishlist:{
    type:Array
}
})

const User=mongoose.model('User',UserSchema)
module.exports=User