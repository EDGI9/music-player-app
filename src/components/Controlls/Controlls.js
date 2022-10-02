import "./Controlls.scss";
import Button from "../../components/Button/Button.js";
import { useSelector, useDispatch  } from 'react-redux'
import { PlayIcon, PauseIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon, ArrowPathRoundedSquareIcon, ArrowsRightLeftIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

function Controlls(props) {
    const player = useSelector(state => state.player)
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()

    let playPauseIcon;
    let muteUnmuteIcon;
    if (player.isPlaying === true) {
        playPauseIcon = <PauseIcon className="c-controlls__play__icon"/>
    } else {
        playPauseIcon = <PlayIcon className="c-controlls__play__icon"/> 
    }
    if (player.isMuted === true) {
        muteUnmuteIcon = <SpeakerXMarkIcon className="c-controlls__mute__icon"/>
    } else {
        muteUnmuteIcon = <SpeakerWaveIcon className="c-controlls__unmute__icon"/> 
    }

    const playPause = () => {
        if (player.isPlaying === true) {
            dispatch({ type: 'player/PAUSE'})
        } else {
            dispatch({ type: 'player/PLAY'})
        }
    }
    const muteUnmute = () => {
        if (player.isMuted === true) {
            dispatch({ type: 'player/UNMUTE'})
        } else {
            dispatch({ type: 'player/MUTE'})
        }
    }
    const nextTrack = () => {
        if (player.trackIndex < playlist.tracks.length) {
            dispatch({ type: 'player/NEXT'})
        } 
    }
    const previousTrack = () => {
        if (player.trackIndex > 0) {
            dispatch({ type: 'player/PREVIOUS'})
        }
    }

    return (
        <div className="c-controlls">
            <button className="c-controlls__shuffle" onClick={muteUnmute}>
                {muteUnmuteIcon}
            </button>
            <button className="c-controlls__previous" onClick={previousTrack}>
                <ChevronDoubleLeftIcon className="c-controlls__previous__icon"/>
            </button>
            <Button onClick={playPause} className="c-controlls__play">{ playPauseIcon }</Button>
            <button className="c-controlls__next" onClick={nextTrack}>
                <ChevronDoubleRightIcon className="c-controlls__next__icon" />
            </button>
            <button className="c-controlls__loop">
                {/* Add click event */}
                <ArrowPathRoundedSquareIcon className="c-controlls__loop__icon" />
            </button>
        </div>
    )
}

export default Controlls;