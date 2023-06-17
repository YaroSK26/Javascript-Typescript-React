import "./ResetButton.css";

const ResetButton = (props) => {
    return (
        <button className="btn" onClick={props.ResetToZero}>Resetovať na 0</button>
    )
}
export default ResetButton