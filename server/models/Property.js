const mongoose = require("mongoose");
const PropertyShema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
propType:{
    type:String,
    required:true
},
investType:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
budget:{
    type:Number,
    required:true
},
image:{
     type:String,
    required:true
},
description:{
    type:String,
    required:true
},
status:{
    type:Boolean,
    required:true
}
 
});
const Property=mongoose.model("property",PropertyShema);
module.exports=Property;