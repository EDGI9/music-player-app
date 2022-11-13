import "./Controlls.scss";
import Button from "../../components/Button/Button.js";
import { useEffect } from 'react';
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
        if (player.trackIndex < (playlist.tracks.length - 1)) {
            dispatch({ type: 'player/UPDATE_TRACK_INDEX', payload: player.trackIndex + 1})
        } else {
            dispatch({ type: 'player/UPDATE_TRACK_INDEX', payload: 0})
            updateTrack(0)
        }
    }
    const previousTrack = () => {
        if (player.trackIndex > 0) {
            dispatch({ type: 'player/UPDATE_TRACK_INDEX', payload: player.trackIndex - 1})
        } else {
            dispatch({ type: 'player/UPDATE_TRACK_INDEX', payload: playlist.tracks.length - 1})
            updateTrack(playlist.tracks.length - 1)
        }
    }

    const loopUnloop = () => {
        if (player.isLoop === true) {
            dispatch({ type: 'player/UNLOOP'})
        } else {
            dispatch({ type: 'player/LOOP'})
        }
    }

    //Reset time and progress
    const resetTimeAndProgress = () => {
        dispatch({ type: 'player/UPDATE_CURRENT_TIME', payload: 0})
        dispatch({ type: 'player/UPDATE_PROGRESS', payload: 0})
    }

    const updateTrack = (index) => {
        dispatch({ type: 'playlist/SET_CURRENT_TRACK', payload: index})
        resetTimeAndProgress();
    }

    // Update current track
    useEffect(() => {
        if (playlist.tracks.length > 0) {
            updateTrack(player.trackIndex)
        }
    }, [player.trackIndex])

    // Loop playlist
    useEffect(() => {
        const endOfPlaylist = player.trackIndex == playlist.tracks.length
        if (player.isLoop && player.progress >= 100) {
            if (endOfPlaylist) {
                previousTrack();
                dispatch({ type: 'player/PLAY'})
            } else {
                nextTrack()
                dispatch({ type: 'player/PLAY'})
            }
        }
    }, [player.progress])

    return (
        <div className="c-controlls">
            <button className="c-controlls__mute" onClick={muteUnmute}>
                {muteUnmuteIcon}
            </button>
            <button className="c-controlls__previous" onClick={previousTrack}>
                <ChevronDoubleLeftIcon className="c-controlls__previous__icon"/>
            </button>
            <Button onClick={playPause} className="c-controlls__play">{ playPauseIcon }</Button>
            <button className="c-controlls__next" onClick={nextTrack}>
                <ChevronDoubleRightIcon className="c-controlls__next__icon" />
            </button>
            <button className={"c-controlls__loop " + (player.isLoop ? "c-controlls__loop--active" : "")} onClick={loopUnloop}>
                <ArrowPathRoundedSquareIcon className="c-controlls__loop__icon" />
            </button>
        </div>
    )
}

export default Controlls;