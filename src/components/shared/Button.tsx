
const Button = ({children, version, type, isDisabled } : any) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: false
}