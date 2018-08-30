import React from 'react';
import GuessDisplay from './guess-display';
import Previous from './previous';
import './game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Guess a number between 1 and 100',
      answer: Math.floor(Math.random() * 100) + 1
    };
  }

  makeGuess(guess) {
    const difference = Math.abs(guess - this.state.answer)

    let feedback;
    if (difference >= 40){
      feedback = 'Freezing Cold'
    } else if (difference >= 20) {
      feedback = 'Cold'
    } else if (difference >= 5) {
      feedback = 'Warm'
    } else if (difference >= 1) {
      feedback= 'Hot'
    } else {
      feedback = 'On Fire! You got it!'
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }


  render() {
    const {feedback, guesses} = this.state;

    return (
      <div className='game-display'>
        <h1>Play the Game</h1>
        <div>
            <GuessDisplay feedback={feedback} onGuess={guess => this.makeGuess(guess)} />
            <h2>Previous Guesses:</h2>
            <Previous guesses={guesses} />
        </div>
      </div>
    )
  }

}
