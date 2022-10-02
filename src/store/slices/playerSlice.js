import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trackIndex: 0,
    isPlaying: false,
    isMuted: false,
    duration: 0,
    currentTime: 0,
    progress: 0,
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
    SET_DURATION: (state, action) => {
        state.duration = action.payload
    },
    UPDATE_CURRENT_TIME: (state, action) => {
        state.currentTime = action.payload
    },
    UPDATE_PROGRESS: (state, action) => {
        state.progress = action.payload
    },
  }
})

export const { NEXT, PREVIOUS, PLAY, PAUSE, MUTE, UNMUTE } = playerSlice.actions

export default playerSlice.reducer