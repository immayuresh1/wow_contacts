const { Message } = require("@material-ui/icons");
const mongoose = require("mongoose");



const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
    
      phone_no: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 13,
        unique: [true,"phone no already exists"]
      },
      phone_no2:{
        type: Number,
        trim: true,
        maxlength:13, 
        unique:true,
        
        
        
      }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
