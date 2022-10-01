import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tracks:[],
    currentTrack:{}
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    SET_PLAYLIST: (state, action) => {
        state.tracks = action.payload
    },
    SET_CURRENT_TRACK: (state, action) => {
        state.currentTrack = state.tracks[action.payload]
    },
  }
})

export const { SET_PLAYLIST } = playlistSlice.actions

export default playlistSlice.reducer