import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onSetQuestions}) {
  
  // useEffect(()=>{
  //   fetch(`http://localhost:4000/questions`)
  //   .then((r)=>r.json())
  //   .then((data)=> onSetQuestions(data))
  // }, [onSetQuestions])

  function handleDeleteQuestion(id){
    const updatedQuestions = questions.filter((q) => q.id !== id)
    onSetQuestions(updatedQuestions)
  }

  function handleUpdate(updatedQ){
    const updatedQuestions=questions.map((q) =>{
      if (q.id === updatedQ.id){
        return updatedQ
      }else{
        return q
      }
    })   
    onSetQuestions(updatedQuestions)
  }


  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((q) => <QuestionItem key = {q.id} question={q} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdate} />)}</ul>
    </section>
  );
}

export default QuestionList;
