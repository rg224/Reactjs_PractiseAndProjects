import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

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
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event,id) => {
    const personID = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const get_person = {...this.state.persons[personID]};

    get_person.name = event.target.value;

    const new_persons = [...this.state.persons];

    new_persons[personID] = get_person;

    this.setState({persons: new_persons});
  }

  deletePersonHandler = (personIndex) => {
    const new_persons = [...this.state.persons];
    new_persons.splice(personIndex,1);
    this.setState({persons: new_persons});
  }

  render() {
                {/* METHOD 2 OF USING CONDITIONAL STATEMENTS + LIST*/}
    let person_list = null;
    if (this.state.showPersons) {
      person_list = (
        <div>
                {/* USING MAP METHOD to show list of persons */}
          {this.state.persons.map((person,index) => {
            return <Person 
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event,person.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App.</h1>
        <p>This is really working!</p>

        <button 
          className="button"
          onClick={this.togglePersonHandler} >
            Toggle Person
        </button>
                  {/* METHOD 1 OF USING CONDITIONAL STATEMENTS */}
        {/* {
          this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name}
                age={this.state.persons[1].age} />
              <Person 
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
              <Person 
                name={this.state.persons[3].name}
                age={this.state.persons[3].age} />
              <Person 
                name={this.state.persons[4].name}
                age={this.state.persons[4].age} />
            </div>
          : null
        } */}

                  {/* METHOD 2 --> inject that list here */}
        {person_list}
      </div>
    );
  }
}

export default App;
