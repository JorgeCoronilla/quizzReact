import React, { useState, useEffect, useCallback, useRef } from 'react'
import { FinalScore } from './FinalScore'


export const Questions = ({ score, setScore }) => {
    const [currentNum, setCurrentNum] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState("")
    const [currentAnswers, setCurrentAnswers] = useState([])
    const [rightAnswer, setRightAnswer] = useState(0)

    const [playing, setPlaying] = useState(true)


   useEffect(() => {
 
        if (currentNum <= 9) {
            setCurrentQuestion(localStorage.getItem(`Pregunta${currentNum}`))
            setRightAnswer(Math.floor(Math.random() * 4))

            var contador = 0;
            var resCorrecta = localStorage.getItem(`resCorrecta${currentNum}`);
            var resIncorrecta = JSON.parse(localStorage.getItem(`resIncorrecta${currentNum}`));
            var answerList = []
            for (let i = 0; i < 4; i++) {
                if (i === rightAnswer) {
                    answerList.push(resCorrecta);
                } else {
                    answerList.push(resIncorrecta[contador]);
                    contador++;
                }
            }
            setCurrentAnswers(answerList)
            console.log("respuesta correcta inicio " + rightAnswer)
        }
    }, [currentNum])

    console.log("En medio" + rightAnswer)
    const checkAnswer = (e) => {
        console.log("respuesta correcta 2: antes comprobar" + rightAnswer)
        if (parseInt(e.target.value) === rightAnswer) {
            setScore(score + 1)
            document.getElementById(e.target.value).style.backgroundColor = "green";
        } else {
            document.getElementById(e.target.value).style.backgroundColor = "red";
        }

        if (currentNum <= 8) {
            setTimeout(() => {
                document.getElementById(e.target.value).style.backgroundColor = "#261732";
                setCurrentNum(currentNum + 1)
            }, 1000)
        } else {
            setTimeout(() => {
                setCurrentNum(currentNum + 1);
                setPlaying(false)
            }, 1000)
        }
        console.log("num preg" + currentNum)
    }

    if (!playing) {
        return <FinalScore score={score} />
    }
    return (

        <div>
            <div className='questions'>
                {/*<h4>{currentQuestion}</h4>*/}
                <h4 key={currentQuestion} dangerouslySetInnerHTML={{ __html: currentQuestion }}></h4>
                {currentAnswers.map((res, index) => (
                    <button
                        className='respuesta'
                        key={res}
                        onClick={checkAnswer}
                        id={index}
                        value={index}
                        dangerouslySetInnerHTML={{ __html: res }}></button>
                ))}
            </div>
        </div>
    )
}
