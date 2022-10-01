import "./ArtistSidePanel.scss";
import { useDispatch  } from 'react-redux'
import { ChevronRightIcon } from '@heroicons/react/24/solid'


function ArtistSidePanel(props) {
    const dispatch = useDispatch()
    console.log(props);
    
    const hideSidePanel = () => {
        dispatch({ type: 'global/SET_SIDE_PANEL_VISIBILITY', payload: false})
    }

    return (
        <aside className={"c-artist-side-panel h-full  absolute top-0 max-w-md bg-white drop-shadow-md z-[1] transform duration-500 " + (props.show ? " right-0 sm:w-full md:w-1/3" : " -right-full invisible")}>
            <button className="c-artist-side-panel__button" onClick={hideSidePanel}> <ChevronRightIcon/></button>
            <div className="h-30">
                <img className="c-artist-side-panel__image" src={props.artistInfo.image}></img>
            </div>
            <div className="c-artist-side-panel__content h-70">
                <h1 className="c-artist-side-panel__content__title">{props.artistInfo.name}</h1>
                <span className="c-artist-side-panel__content__text">{props.artistInfo.popularity}</span>
            </div>
        </aside> 
    )
}

export default ArtistSidePanel;