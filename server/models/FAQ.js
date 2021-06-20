const mongoose = require("mongoose");
const FAQShema=new mongoose.Schema({
   question:{
       type:String,
       required:true
   },
   answer:{
    type:String,
    required:true
}
});
const FAQ=mongoose.model("FAQ",FAQShema);
module.exports=FAQ;
