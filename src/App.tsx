import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import FeedbackData from "./data/feedbackData"
import { v4 as uuidv4 } from 'uuid';
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import AboutLink from "./components/AboutLink";
import AboutPage from "./pages/AboutPage"


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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          
          <Route path="/" element={ 
          <>
            <FeedbackForm addFeedback = {addFeedback}/>
            <FeedbackStats feedback = {feedback}/>
            <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback} />
          </>
          } 
          />
          
          <Route path="/about" element={<AboutPage />} />

        </Routes>

        <AboutLink />
      </div>

    </Router>
  )
}


export default App
