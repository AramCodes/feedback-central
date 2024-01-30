
const Card = ({children}: any, reverse: boolean) => {

  return (
    <div className={`card ${reverse === true ? "reverse": ""}`}>
        {children}
    </div>
  )


}

export default Card

Card.defaultProps = {
  reverse: false,
}