import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trackIndex: 0,
    isPlaying: false,
    isMuted:false
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    NEXT: state => {
        state.trackIndex += 1
        state.isPlaying = false
    },
    PREVIOUS: state => {
        if (state.trackIndex > 0) {
            state.trackIndex -= 1
            state.isPlaying = false
        } 
    },
    PLAY: state => {
        state.isPlaying = true
    },
    PAUSE: state => {
        state.isPlaying = false
    },
    MUTE: state => {
        state.isMuted = true
    },
    UNMUTE: state => {
        state.isMuted = false
    },
    
  }
})

export const { SET_PLAYLIST, NEXT, PREVIOUS, PLAY, PAUSE, MUTE, UNMUTE } = playerSlice.actions

export default playerSlice.reducer