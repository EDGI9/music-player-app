import "./ArtistSidePanel.scss";
import Tag from "../../components/Tag/Tag.js";
import Button from "../../components/Button/Button.js";
import { useDispatch  } from 'react-redux'
import { ChevronRightIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/solid'


function ArtistSidePanel(props) {
    const dispatch = useDispatch()
    
    const hideSidePanel = () => {
        dispatch({ type: 'global/SET_SIDE_PANEL_VISIBILITY', payload: false})
    }

    return (
        <aside className={"c-artist-side-panel h-full absolute top-0 max-w-md bg-white drop-shadow-md z-[1] transform duration-700 " + (props.show ? " right-0 sm:w-full md:w-1/3" : " -right-full invisible")}>
            <Button onClick={hideSidePanel} className="absolute ml-5 mt-5 rounded-full p-2"><ChevronRightIcon className="h-5 w-5"/></Button>
            <div className="h-30 max-h-80 overflow-hidden">
                <img className="c-artist-side-panel__image" src={props.artistInfo.image}></img>
            </div>
            <div className="h-70 p-5 ">
                <h1 className="mb-5 font-bold text-2xl">{props.artistInfo.name}</h1>
                <div className="mb-5">
                    <h3 className="text-sm mb-2">Popularity</h3>
                    <Tag>
                        <SparklesIcon className="h-5 w-5 mr-2"/>
                        <span>{props.artistInfo.popularity}</span>
                    </Tag>
                </div>
                <div className="mb-5">
                    <h3 className="text-sm mb-2">Followers</h3>
                    <Tag>
                        <UserGroupIcon className="h-5 w-5 mr-2"/>
                        <span>{props.artistInfo.total}</span>
                    </Tag>
                </div>
                <div className="mb-5">
                    <h3 className="text-sm mb-2">Genres</h3>
                    <ul className="flex flex-row flex-wrap gap-2">
                        {props.artistInfo.genres?.map(listitem => 
                            (
                                <li key={listitem}><Tag>{listitem}</Tag></li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </aside> 
    )
}

export default ArtistSidePanel;