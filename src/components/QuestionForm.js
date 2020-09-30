import React, { useState } from "react";

const QuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: ""
  })

  const handleChange = (event) => {
    // console.log(event.currentTarget.name)
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewQuestionFunction(newQuestion)
    
    setNewQuestion({
      question: "",
      answer: ""
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Question:</label>
      <input 
        id="question"
        name="question"
        type="text"
        onChange={handleChange}
        value={newQuestion.question}
      />

      <label htmlFor="answer">Answer:</label>
      <input 
        id="answer"
        name="answer"
        type="text"
        onChange={handleChange}
        value={newQuestion.answer}
      />

      <input type="submit" />
    </form>
  )
}

export default QuestionForm;