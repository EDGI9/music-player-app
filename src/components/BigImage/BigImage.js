import "./BigImage.scss";
import { useDispatch  } from 'react-redux'


function BigImage(props) {
    const dispatch = useDispatch()
    const shoSidePanel = async () => {
        dispatch({ type: 'global/SET_SIDE_PANEL_VISIBILITY', payload: true})
    }

    return (
        <div className="c-big-image">
            <img className="c-big-image__background" src={props.image}></img>
            <button className="c-big-image__button" onClick={shoSidePanel}>More</button>
        </div>
    )
}

export default BigImage;