import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext({});

export const FeedbackProvider = ({ children } : any) => {

    const [feedback, setFeedback] = useState([
        {
            id: "uddm56",
            text: "This item 1 is from context",
            rating: 9
        },
        {
            id: "ty576p",
            text: "This item 2 is from context",
            rating: 7
        },
        {
            id: "n4xht1",
            text: "This item 3 is from context",
            rating: 8
        },
        {
            id: "y643bnm",
            text: "This item 4 is from context",
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {id: "", text: "", rating: 0},
        edit: false
    })

    const addFeedback = (newFeedbackObj: {id:string, text: string, rating: number}) =>{
        newFeedbackObj.id = uuidv4();
        setFeedback([ newFeedbackObj, ...feedback])
    }

    const deleteFeedback = (id: string) => {
        if (window.confirm("Are you sure you would like to delete this feedback?")) {
        setFeedback(feedback.filter((item) => item.id !== id) )
        }
    }

    const updateFeedback = (id: string, newUpdateObj: {id: string, text: string, rating: number}) => {
        setFeedback(feedback.map((item) => (item.id === id? {...item, ...newUpdateObj} : item) ) )
    }

    const editFeedback = (item: {id: string, text: string, rating: number}) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value = {{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
            }}
            >
                {children}
           </FeedbackContext.Provider>
}

export default FeedbackContext;