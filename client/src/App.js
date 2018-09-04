import React, { Component } from 'react';
import {form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.AddName = this.AddName.bind(this);
    this.AddContact = this.AddContact.bind(this);
    this.AddAge = this.AddAge.bind(this);

    this.state = {
      name: '',
      contact:'',
      age:''
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
  render() {
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
            placeholder="Mobile number"
            onChange={this.AddAge}
            />
        </div>
          </FormGroup>
          <Button type="submit">Add</Button>
          <Button type="submit">Get</Button>
          <Button type="submit">Delete</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
