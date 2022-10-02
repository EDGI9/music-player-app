import "./Tag.scss";

function Tag(props) {

    return (
        <div className="c-tag">
            {props.children}
        </div>
    )
}

export default Tag