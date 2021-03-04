// for Styled-Component Styling --> npm install --save styled-components
// then in package.json file you will find a new dependency i.e; styled-components

import React, { Component } from 'react';
import styled from 'styled-components'; // for styled-componnets

import './App.css';
import Person from './Person/Person';

// to dynamically insert something into long string with back ticks(``) [TEMPLATE LITERAL] simply use $ sign
const StyledButton = styled.button `
    background-color: ${props => props.change_buttonEffect? 'red': 'green'};
    color:white;
    font: inherit;
    border: 2px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.change_buttonEffect? 'salmon': 'lightgreen'};;
      color: black;
    }
  `;

class App extends Component {

  state = {
    persons: [
      { name: 'Auraa', age: 22, id:1 },
      { name: 'Bauraa', age: 25, id:2 },
      { name: 'Ciara', age: 22, id:3 },
      {name: 'Diana', age: 48, id:4},
      {name: 'Edge', age: 51, id:5}
    ],
    showPersons:false
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons; // get the current state of showPersons
    this.setState({showPersons: !doesShow}); // update the state opposite to current state
  }

  nameChangeHandler = (event,id) => {

    // the id, whose name we want to change is actually the one, then return it and make it equal to personIdx.
    const personIdx = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const get_person = {
      ...this.state.persons[personIdx]
    };

    get_person.name = event.target.value;

    const update_persons = [...this.state.persons];

    update_persons[personIdx] = get_person;

    this.setState( {persons: update_persons} );
  }

  deletePersonHandler = (personIndex) => {
    const new_persons = [...this.state.persons]; // use spread operator to make a copy
    new_persons.splice(personIndex,1); // use splice() method to delete data at a particular index
    this.setState({persons: new_persons}); // update the state using setState for class bases components
  }

  render() {

    let person_list = null; // this will be injected in return statement
    if (this.state.showPersons) {
      person_list = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={(event)=> this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App.</h1>
        <p className={assignedClasses.join(' ')} >This is really working!</p>

        <StyledButton 
          change_buttonEffect={this.state.showPersons}
          onClick={this.togglePersonHandler} >
            Toggle Persons
        </StyledButton>

        {person_list}
      </div>
    );
  }
}

export default App;