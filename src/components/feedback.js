import React from 'react'
import './feedback.css'

export default function Feedback(props) {

  // const feedback = 'feedback'

  return (
    <div className = 'feedback'>
      {props.feedback}
    </div>
  );
};
