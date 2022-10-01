import "./BigImage.scss";
//import image from "../../assets/img/gorillaz-dummy.png"

function BigImage(props) {
    return (
        <div className="c-big-image">
            <img className="c-big-image__background" src={props.image}></img>
        </div>
    )
}

export default BigImage;