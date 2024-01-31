import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from "framer-motion"
 
const FeedbackList = () => {

    const { feedback }:any = useContext(FeedbackContext);

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

    if (!feedback || feedback.length === 0) { 
        return <p>There is no feedback yet</p>
    } 

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbackCards}
            </AnimatePresence>
        </div>
    )
    
}

export default FeedbackList