import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trackIndex: 0,
    isPlaying: false,
    isMuted: false,
    isLoop: false,
    duration: 0,
    currentTime: 0,
    progress: 0,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
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
    LOOP: state => {
        state.isLoop = true
    },
    UNLOOP: state => {
        state.isLoop = false
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
    UPDATE_TRACK_INDEX: (state, action) => {
        state.trackIndex = action.payload
    },
  }
})

export const { NEXT, PREVIOUS, PLAY, PAUSE, MUTE, UNMUTE } = playerSlice.actions

export default playerSlice.reducer