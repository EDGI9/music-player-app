import "./ArtistSidePanel.scss";
import { useDispatch  } from 'react-redux'
import { ChevronRightIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/solid'


function ArtistSidePanel(props) {
    const dispatch = useDispatch()
    console.log(props);
    
    const hideSidePanel = () => {
        dispatch({ type: 'global/SET_SIDE_PANEL_VISIBILITY', payload: false})
    }

    return (
        <aside className={"c-artist-side-panel h-full absolute top-0 max-w-md bg-white drop-shadow-md z-[1] transform duration-500 " + (props.show ? " right-0 sm:w-full md:w-1/3" : " -right-full invisible")}>
            <button className="c-artist-side-panel__button" onClick={hideSidePanel}> <ChevronRightIcon/></button>
            <div className="h-30">
                <img className="c-artist-side-panel__image" src={props.artistInfo.image}></img>
            </div>
            <div className="h-70 p-5 ">
                <h1 className="mb-5 font-bold text-2xl">{props.artistInfo.name}</h1>
                <div className="mb-5">
                    <h3 className="text-sm mb-2">Popularity</h3>
                    <span className="c-artist-side-panel__tag flex w-auto"><SparklesIcon className="h-6 w-6 mr-2"/> {props.artistInfo.popularity} </span> 
                </div>
                <div className="mb-5">
                    <h3 className="text-sm mb-2">Genres</h3>
                    <ul className="flex flex-row flex-wrap gap-2">
                        {props.artistInfo.genres?.map(listitem => 
                            (
                                <li key={listitem} className="c-artist-side-panel__tag" >{listitem}</li>
                            )
                        )}
                    </ul>
                </div>
                <div className="mb-5">
                    <h3 className="text-sm mb-2">Followers</h3>
                    <span className="c-artist-side-panel__tag flex w-auto"><UserGroupIcon className="h-6 w-6 mr-2"/> {props.artistInfo.total} </span> 
                </div>
            </div>
        </aside> 
    )
}

export default ArtistSidePanel;