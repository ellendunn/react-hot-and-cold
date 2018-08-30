import React from 'react'
import './guess-form.css'

// export default function Guess(props){
export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: []
    }
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.props.onGuess) {
      const guess = this.input.value
      this.props.onGuess(guess)
    }
    this.input.value='';
  }

  render() {
    return (
      <form className='guess' onSubmit={e => this.onSubmit(e)}>
        <label>Enter Your Guess</label>
        <input
          type='number'
          id='guess'
          name='guess'
          min = '1'
          max = '100'
          ref= {guess => this.input = guess}
          required
          />
          <button type='submit' >Guess</button>
      </form>
    );
  }
}
