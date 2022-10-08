import './Button.styles.css'

export const Button = ({text, handleFunction}) => {
    return (
        <button className="button" onClick={handleFunction}>{text}</button>

    )

}