import React, {useState} from 'react'
import { Questions } from './Quizz/Questions'
import { Score } from './Quizz/Score'

export const Quiz = () => {
    const [score, setScore] = useState(0)
  return (
    <div>
        <Score score={score} setScore={setScore} />
        <div className='quizz-body'>
        <Questions score={score} setScore={setScore} />
        </div>
    </div>
  )
}
