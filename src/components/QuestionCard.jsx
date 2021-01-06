import React, { useState, useEffect } from 'react';


const QuestionCard = ({ question, choices, rightAns }) => {

    const [value, setValue] = useState('');
    const [isAnswered, setIsAnswered] = useState(false)
    useEffect(() => {
        console.log(value)
    }, [value])

    const handleClick = (option) => {
        setValue(option)
        setIsAnswered(true)
    }
    return (
        <div>

            <h3>{question}</h3>
            {choices.map((option, id) => {
                return (
                    <button disabled={isAnswered} onClick={() => handleClick(option)} key={id} value={value}>{option}</button>
                )
            })}
            {isAnswered && <h4>Your ans is {value === rightAns ? "CORRECT" : "Wrong"}</h4>}
            {console.log(question)}
        </div>
    )
}

export default QuestionCard

QuestionCard.defaultProps = {
    question: "this is your question",
    choices: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
    ],
    rightAns: "Option 2"

}
