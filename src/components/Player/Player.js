import Controlls from "../../components/Controlls/Controlls.js";
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch  } from 'react-redux'

function Player(props) {
    const player = useSelector(state => state.player)
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()
    const myAudio = useRef();

    // Update current track
    useEffect(() => {
        if (playlist.tracks.length > 0) {
        dispatch({ type: 'playlist/SET_CURRENT_TRACK', payload: player.trackIndex})
        }
    }, [player.trackIndex])

    // Play/Pause the player
    useEffect(() => {
        if (player.isPlaying === true) {
            myAudio.current.play()
        } else {
            myAudio.current.pause()
        }
    }, [player.isPlaying])

    // Mute/Unmute the player
    useEffect(() => {
        myAudio.current.muted = player.isMuted
    }, [player.isMuted])

    return (
        <div className="c-player">
            <audio ref={myAudio} src={playlist.currentTrack.src} >
            </audio>
            <Controlls></Controlls>
        </div>
    )
}

export default Player;