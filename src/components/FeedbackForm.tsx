import { useState } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'


function FeedbackForm({ addFeedback }: { addFeedback: Function}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  // const { addFeedback, feedbackEdit, updateFeedback } =
  //   useContext(FeedbackContext)

  // useEffect(() => {
  //   if (feedbackEdit.edit === true) {
  //     setBtnDisabled(false)
  //     setText(feedbackEdit.item.text)
  //     setRating(feedbackEdit.item.rating)
  //   }
  // }, [feedbackEdit])

  const handleTextChange = (e: {target: any}) => { // 👈  get the value
    if (text === '') {
      setBtnDisabled(true)
      setMessage("")
      
    } else if (text.trim().length < 9) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage("")
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback : {id: string; text: string; rating:number;}= {
        id:"",
        text,
        rating
      }

      // if (feedbackEdit.edit === true) {
      //   updateFeedback(feedbackEdit.item.id, newFeedback)
      // } else {
      addFeedback(newFeedback)
      

      setBtnDisabled(true) 
      setRating(10) 
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect
        select = {setRating}
        selected = {rating}
        />

        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
            name='text'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
