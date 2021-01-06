import React, { useState, useEffect } from 'react'
import { demoData } from './demo'
import './App.css';
import QuestionCard from './components/QuestionCard';

const API = "https://opentdb.com/api.php?amount=10"


const App = () => {

  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

  }, []);

  const handleStart = (e) => {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => {
        const lst = quizMaker(resp.results)
        setState(lst)
        setIsLoading(true)

      })
      .catch(er => console.log(er))


    // console.log(lst);
  }


  return (
    <div className="App">
      <h1>Trivia-Quiz</h1>
      <button onClick={handleStart}>Start Quiz</button>
      {isLoading && state.map(item => {
        return <QuestionCard question={item.question} choices={item.choices} rightAns={item.rightAns} />
      })}
      {console.log(state)}
    </div>
  );
}

export default App;

const quizMaker = (quizList) => {
  const list = quizList.map(item => {
    let ansChoices = item.incorrect_answers
    ansChoices.push(item.correct_answer)

    return {
      question: item.question,
      choices: ansChoices,
      rightAns: item.correct_answer,
    }

  })
  return list
}