import React, { useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[questions, setQuestions] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:4000/questions`)
    .then((r)=>r.json())
    .then((data)=> setQuestions(data))
  }, [questions])

  function handleAddQuestion(newQ){
      const updatedQuestions = [...questions, newQ]
      setQuestions(updatedQuestions)
      setPage("List")
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion = {handleAddQuestion}/> : <QuestionList questions ={questions} onSetQuestions={setQuestions} />}
    </main>
  );
}

export default App;
