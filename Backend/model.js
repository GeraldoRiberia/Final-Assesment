var mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
var BlogModel=mongoose.model("BlogModel",schema);
module.exports=BlogModel;
