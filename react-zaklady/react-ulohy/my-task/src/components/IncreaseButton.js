import "./IncreaseButton.css"

const IncreaseButton = (props) => {
    return (
        <button className="btn" onClick={props.increase}>Zvačšiť o 1</button>
    )
}
export default IncreaseButton
