import React from 'react'

import './previous.css'

export default function Previous(props) {

  const previous = props.guesses.map((guess, index) => (
    console.log(guess),
    <li key={index} className='previous'>
      {guess}
    </li>
  ));

  return (
    <ul className = 'guess-list'>
      {previous}
    </ul>
  )
}
