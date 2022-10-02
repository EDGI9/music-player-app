import "./BigImage.scss";
import Button from "../../components/Button/Button.js";
import { useDispatch  } from 'react-redux'


function BigImage(props) {
    const dispatch = useDispatch()
    const shoSidePanel = async () => {
        dispatch({ type: 'global/SET_SIDE_PANEL_VISIBILITY', payload: true})
    }

    return (
        <div className={"c-big-image " + (props.className ? props.className: "" )}>
            <img className="c-big-image__background" src={props.image}></img>
            <Button onClick={shoSidePanel} className="c-big-image__button">More</Button>
        </div>
    )
}

export default BigImage;