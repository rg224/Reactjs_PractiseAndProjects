// for css-modules to work we need to tweek the underlying project a little bit
// ---> if in package.json react-scripts version = 1.somehting, then
//        run --> npm run eject --> it will give us access to those config files where we can tweek a littlt bit for css-modules to work
// after this you will find 2 files where in test: /\.css$/ options(css-loader) you have to add something :
//      1) webpack.config.dev.js --> 
                  // modules: true, --> enables css modules that we will use
                  // localIdentName: '[name]__[local]__[hash:base64:5]' --> this will generate dynamic unique classnames
//      2) webpack.config.prod.js -->
                  // modules: true, --> enables css modules that we will use
                  // localIdentName: '[name]__[local]__[hash:base64:5]' --> this will generate dynamic unique classnames

import React, { Component } from 'react';
import classes from './App.css'; // for css-modules this is how you have to import

import Person from './Person/Person';

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
    let btnClass = ''; // now we are dealing with any button
    
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

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi! I'm a React App.</h1>
        <p className={assignedClasses.join(' ')} >This is really working!</p>

        <button
          className={btnClass}
          onClick={this.togglePersonHandler} >
            Toggle Persons
        </button>

        {person_list}
      </div>
    );
  }
}

export default App;