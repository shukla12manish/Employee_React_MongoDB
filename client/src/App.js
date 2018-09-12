import React, { Component } from 'react';
import {form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.AddName = this.AddName.bind(this);
    this.AddContact = this.AddContact.bind(this);
    this.AddAge = this.AddAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      name: '',
      contact:'',
      age:'',
      employees: [],
      showEmployees: false
    };
  }
  AddName(e){
    this.setState({name:e.target.value});
  }
  AddContact(e){
    this.setState({contact:e.target.value});
  }
  AddAge(e){
    this.setState({age:e.target.value});
  }

  componentWillMount(){
    
    fetch('http://localhost:5000/api/employees')
    .then(res => res.json())
    .then(data => this.setState({employees:data}));
    
  }


  toggleEmployees = () => this.setState( prevState => ({
    showEmployees: !prevState.showEmployees,
  }))

  handleSubmit(event){ 
    event.preventDefault();
    fetch('http://localhost:5000/api/employees', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: {
      "name": this.state.name,
      "contact": this.state.contact,
      "age": this.state.age
     }
    });
   };
  render() {
    const { showEmployees } = this.state;
    const employees = this.state.employees.map(employee => (
      <div style={{ border: "1px solid black"}} key={employee._id}>
        <h3>Name: {employee.name}</h3>
        <p>Contact: {employee.contact}</p>
        <p>Age:{employee.age}</p>
      </div>
    ));
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Employee List</h1>
        </header>
        <div className="Layout">
          <form>
            <FormGroup>

              <ControlLabel>Name:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Employee name"
              onChange={this.AddName}
              />
            <div>
            <ControlLabel>Contact:</ControlLabel>
            <FormControl
              type="number"
              value={this.state.contact}
              placeholder="Mobile number"
              onChange={this.AddContact}
              />
          </div>
          <div>
          <ControlLabel>Age:</ControlLabel>
          <FormControl
            type="number"
            value={this.state.age}
            placeholder="Age"
            onChange={this.AddAge}
            />
        </div>
          </FormGroup>
          <Button  onSubmit={this.handleSubmit}>Add</Button>
          <Button onClick={this.toggleEmployees}>{ showEmployees ? "Hide Employees" : "Show Employees" }</Button>
      
          </form>
          
        </div>
        <div><br/></div>
        {this.state.showEmployees && employees}
      </div>
    );
  }
}

export default App;
