import React, { useEffect, useState } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';

const FAQContainer = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  // debugger

  useEffect(() => {
    // debugger
    fetch('/api/v1/questions')
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        // throw error
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((responseBody) => {
      setQuestions(responseBody)
    })
  }, [])

// debugger

  const addNewQuestion = (newQuestionObject) => {
    // debugger
    fetch("/api/v1/questions", {
      method: "POST",
      body: JSON.stringify(newQuestionObject)
    })
    .then((response) => {
      return response.json()
    })
    .then((responseBody) => {
      // debugger
      setQuestions([
        ...questions,
        responseBody
      ])
    })
  }

  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)
    }
    else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => { toggleQuestionSelect(question.id) }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <QuestionForm 
        addNewQuestionFunction={addNewQuestion}
      />
      
      <div className='question-list'>
        {questionListItems}
      </div>
    </div>
  )

}

export default FAQContainer;
