const mongoose =
require("mongoose");

const projectSchema =
new mongoose.Schema({

  projectName:{
    type:String,
    required:true
  },

  description:{
    type:String
  },

  members:[
    {
      type:String
    }
  ],

  progress:{
    type:Number,
    default:0
  }

});

module.exports =
mongoose.model(
  "Project",
  projectSchema
);