const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  contact:{
    type:Number,
    required:true
  },
  age:{
    type:Number,
    required:true
  }
});

module.exports= Item = mongoose.model('item', ItemSchema);
