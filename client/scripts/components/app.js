import React from 'react';
import Pet from './pet';
import petData from '../data/pets';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: petData
    }
    this.petLiked = this.petLiked.bind(this);
  }

  render() {
    return <div className='app'>
      <div className='intro'>
        <h1>Pick a Pet!</h1>
        <p>Vote on your favorite pet.</p>
      </div>

      { this.state.pets.map(pet => <Pet key={pet.id}
                                        {...pet}
                                        onLike={ this.petLiked } /> )}
    </div>
  }

  petLiked(id) {
    var pet = this.state.pets.find(pet => pet.id === id);
    pet.likes += 1;
    this.setState({ pets: this.state.pets });
  }
}

export default App;
