import React from 'react'
import './guess-display.css'

import GuessForm from './guess-form'
import Feedback from './feedback'

export default function GuessDisplay(props){
  const {feedback} = props

  return (
    <div className='guess-display'>
      <GuessForm onGuess={guess => props.onGuess(guess)} />
      <Feedback feedback = {feedback} />
    </div>
  )
}
