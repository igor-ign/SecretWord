import './Button.styles.css'

export const Button = ({text, handleFunction, isButtonDisabled}) => {
    return (
        <button className="button" onClick={handleFunction} disabled={isButtonDisabled}>{text}</button>

    )

}