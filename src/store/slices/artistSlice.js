import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data:{}
}

const artist = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    SET_ARTIST_INFO: (state, action) => {
        state.data = action.payload
    },
  }
})

export const { SET_ARTIST_INFO } = artist.actions

export default artist.reducer