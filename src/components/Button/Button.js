import "./Button.scss";

function Button(props) {
    return (
        <button className={"c-button " + (props.className ? props.className : "") } onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button