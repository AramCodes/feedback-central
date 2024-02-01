import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext({});

export const FeedbackProvider = ({ children } : any) => {

    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState([    
        { id: "t3J0",
          text : "This is feedback item number 0, which is hard coded",
          rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {id: "", text: "", rating: 0},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    },[])

    const fetchFeedback = async () => {
        setIsLoading(true)
        const response = await fetch(`http://localhost:3000/feedback`)
        const data = await response.json()
        setFeedback([...feedback , ...data])
        setIsLoading(false)
    }

    const addFeedback = async (newFeedbackObj : {id: string; text: string; rating: number;}) =>{
        const headerPayload = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newFeedbackObj)}
        const response = await fetch(`http://localhost:3000/feedback`, headerPayload)
        const data = await response.json()

        setFeedback([ data, ...feedback])
    }

    const deleteFeedback = async (id: string) => {
        const headerPayload = { method: "DELETE"}

        if (window.confirm("Are you sure you would like to delete this feedback?")) {
            await fetch(`http://localhost:3000/feedback${id}`, headerPayload)

            setFeedback(feedback.filter((item) => item.id !== id) )
        }
    }

    const updateFeedback = async (id: string, newUpdateObj: {id: string, text: string, rating: number}) => {
        const header = { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newUpdateObj)}
        const response = await fetch(`http://localhost:3000/feedback${id}`, header)

        const data = await response.json()

        setFeedback(feedback.map((item) => (item.id === id? {...item, ...data} : item) ) )
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
            isLoading,
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