
import { Link } from 'react-router-dom'

type Props = {
    text: string,
    bgColor: string,
    textColor: string
}

function Header({ text, bgColor, textColor } : Props) {

    const headerStyles = {
        backgroundColor :  bgColor,
        color: textColor
    }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "FeedbackCentral",
    bgColor: "rgba(0, 0, 0, 0.4)",
    textColor: "#FF6A95"
}



export default Header