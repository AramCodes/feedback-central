
const Card = ({children}: any, reverse: boolean) => {

  return (
    <div className={`card ${reverse? "reverse": null}`}>
        {children}
    </div>
  )


}

export default Card

Card.defaultProps = {
  reverse: false,
}