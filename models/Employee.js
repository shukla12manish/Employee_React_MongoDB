const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
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

module.exports= Employee = mongoose.model('employee', EmployeeSchema);
