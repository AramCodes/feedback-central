import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import AboutLink from "./components/AboutLink";
import AboutPage from "./pages/AboutPage"

import { FeedbackProvider } from "./context/FeedbackContext";


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={ 
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </>
            } />
            
            <Route path="/about" element={<AboutPage />} />

          </Routes>

          <AboutLink />
        </div>

      </Router>
    </FeedbackProvider>
  )
}


export default App
