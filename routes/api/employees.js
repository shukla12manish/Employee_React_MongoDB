const express = require('express');
const router = express.Router();

const Employee = require('../../models/Employee');



router.get('/', (req, res)=>{
  Employee.find()
      .sort({name:1})
      .then(employees => res.json(employees))
});

router.post('/', (req, res)=>{
  const newEmployee = new Employee({
    name:req.body.name,
    contact:req.body.contact,
    age:req.body.age
  });
  newEmployee.save().then(employee=>res.json(employee));
});

router.delete('/:id', (req, res)=>{
  Employee.findById(req.params.id)
  .then(employee=>newEmployee.remove().then(()=>res.json({success:true})))
  .catch(err=>res.status(404).json({success:false}));
});
module.exports = router;
