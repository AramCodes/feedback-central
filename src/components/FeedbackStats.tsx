import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackStats = () => {

  const { feedback } : any = useContext(FeedbackContext);

  const average : number = feedback.reduce((acc : number, item : {rating: number}) => {
    return acc + item.rating
  }, 0) / feedback.length

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} {feedback.length === 0 ? "Review" : "Reviews"}</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

export default FeedbackStats