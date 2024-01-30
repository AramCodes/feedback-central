import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedbackObj: {id:string, text: string, rating: number}) =>{
    newFeedbackObj.id = uuidv4();
    setFeedback([ newFeedbackObj, ...feedback])
  }

  const deleteFeedback = (id: string) => {
    if (window.confirm("Are you sure you would like to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id) )
    }
  }

  return (
    <>
    <Header />
    <div className="container">
      <FeedbackForm 
      handleAdd = {addFeedback}
      />
      <FeedbackStats 
      feedback = {feedback}
      />
      <FeedbackList 
      feedback = {feedback} 
      handleDelete = {deleteFeedback}
      />
    </div>
    </>
  )
}


export default App
