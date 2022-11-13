import Controlls from "../../components/Controlls/Controlls.js";
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { GET_ARTIST_INFO } from '../../services/artists.js'

function Player(props) {
    const [timer, setTimer] = useState(0);
    const player = useSelector(state => state.player)
    const playlist = useSelector(state => state.playlist)
    const global = useSelector(state => state.global)
    const dispatch = useDispatch()
    const myAudio = useRef()
  
    //Set duration of track
    const onLoadedMetadata = () => {
        if (myAudio.current) {
            dispatch({ type: 'player/SET_DURATION', payload: Math.floor(myAudio.current.duration)})
        }
    }

    //Set duration of track
    const updateProgress = (currentTime, progress) => {
        if (player.isPlaying === true) {
            dispatch({ type: 'player/UPDATE_CURRENT_TIME', payload: currentTime})
            dispatch({ type: 'player/UPDATE_PROGRESS', payload: progress})
        }
    }

    //Start timer
    useEffect(() => {
        if (player.isPlaying === true) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1)
            }, 1000)
            
            return () => clearInterval(interval)
        }
    }, [player.isPlaying])
    
    // Update timer
    useEffect(() => {
        if (player.isPlaying === true) {
            const currentTime = Math.floor(timer)
            const progress = Math.floor(( timer / player.duration) * 100)
            updateProgress(currentTime, progress)
        }
    }, [timer])

    //Reset timer after track change
    useEffect(() => {
        setTimer(0)
    }, [player.trackIndex])

    //Reset timer end of track
    useEffect(() => {
        if (player.currentTime > player.duration) {
            if (player.isLoop === false) {
                dispatch({ type: 'player/PAUSE'})
            } 
            //Reset everything
            updateProgress(0, 0)
            setTimer(0)
        }
    }, [player.currentTime])


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
            <audio ref={myAudio} autoPlay onLoadedMetadata={onLoadedMetadata} src={playlist.currentTrack.src}>
            </audio>
            <Controlls></Controlls>
        </div>
    )
}

export default Player;