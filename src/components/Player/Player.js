import Controlls from "../../components/Controlls/Controlls.js";
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { GET_ARTIST_INFO } from '../../services/artists.js'

function Player(props) {
    const player = useSelector(state => state.player)
    const playlist = useSelector(state => state.playlist)
    const global = useSelector(state => state.global)
    const dispatch = useDispatch()
    const myAudio = useRef();
    let timer
  
    //Set duration of track
    const onLoadedMetadata = () => {
        if (myAudio.current) {
            dispatch({ type: 'player/SET_DURATION', payload: Math.floor(myAudio.current.duration)})
        }
    };

    //Reset time and progress
    const resetTimeAndProgress = () => {
        dispatch({ type: 'player/UPDATE_CURRENT_TIME', payload: 0})
        dispatch({ type: 'player/UPDATE_PROGRESS', payload: 0})
    }

    // Update Current Time and Progess
    useEffect(() => {
        if (player.isPlaying === true) {
            timer = setInterval(() => {
                const currenTime = Math.floor(myAudio.current.currentTime)
                const progress = Math.floor(( myAudio.current.currentTime / player.duration) * 100)
                dispatch({ type: 'player/UPDATE_CURRENT_TIME', payload: currenTime})
                dispatch({ type: 'player/UPDATE_PROGRESS', payload: progress})
            }, 1000);
            return () => clearInterval(timer);
        } 
    }, [player.isPlaying])

    

    // Update current track
    useEffect(() => {
        if (playlist.tracks.length > 0) {
            dispatch({ type: 'playlist/SET_CURRENT_TRACK', payload: player.trackIndex})
            resetTimeAndProgress()
        }
    }, [player.trackIndex])

    // Update artist info
    useEffect(async () => {
        const artistInfo = await GET_ARTIST_INFO(global.token, playlist.currentTrack.artistId)
        dispatch({ type: 'artist/SET_ARTIST_INFO', payload: artistInfo})
    }, [playlist.currentTrack.artistId])

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
            <audio ref={myAudio} onLoadedMetadata={onLoadedMetadata} src={playlist.currentTrack.src} >
            </audio>
            <Controlls></Controlls>
        </div>
    )
}

export default Player;