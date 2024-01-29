import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback}: any ) => {

    const feedbackCards = feedback.map((item: {id: number, rating: number, text: string})  => {
    return (
        <FeedbackItem 
        key={item.id} 
        item = {item} 
        />
    )
    })

    if (!feedback || feedback.length === 0) { 
        return <p>There is no feedback yet</p>
    } else {
        return (
            <div className="feedback-list">
                {feedbackCards}
            </div>
        )
    }
}

export default FeedbackList