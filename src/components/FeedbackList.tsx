import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "../assets/loader.svg"
 
const FeedbackList = () => {

    const { feedback, isLoading }:any = useContext(FeedbackContext);

    const feedbackCards = feedback.map((item: {id: string, rating: number, text: string})  => {
    return (
        <motion.div 
        key = {item.id}
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit={{opacity: 0}}
        >
            <FeedbackItem 
                key = {item.id} 
                item = {item}
            />
        </motion.div>
    )
    })

    if (!isLoading && (!feedback || feedback.length === 0)) { 
        return <p>There is no feedback yet</p>
    }
    
    return isLoading? 
    ( <div className="feedback-list"> 
        <img src={Loader} alt="loader" className="loader"/> 
      </div> 
    )

    :

    ( <div className="feedback-list">
        <AnimatePresence>
            {feedbackCards}
        </AnimatePresence>
      </div> 
    )
    
}

export default FeedbackList