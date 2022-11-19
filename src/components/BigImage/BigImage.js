import "./BigImage.scss";
import Button from "../../components/Button/Button.js";
import { useDispatch, useSelector } from 'react-redux'


function BigImage(props) {
    const global = useSelector(state => state.global)
    const dispatch = useDispatch()

    const showSidePanel = async () => {
        dispatch({ type: 'global/SET_SIDE_PANEL_VISIBILITY', payload: !global.showSidePanel})
    }

    return (
        <div className={"c-big-image " + (props.className ? props.className: "" )}>
            <img className="c-big-image__background" src={props.image}></img>
            <Button onClick={showSidePanel} className="c-big-image__button">More</Button>
        </div>
    )
}

export default BigImage;