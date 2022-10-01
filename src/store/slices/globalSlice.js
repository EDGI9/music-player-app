import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token:"",
    showSidePanel: false
}

const global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
        state.token = action.payload
    },
    SET_SIDE_PANEL_VISIBILITY: (state, action) => {
        state.showSidePanel = action.payload
    },
  }
})

export const { SET_SIDE_PANEL_VISIBILITY } = global.actions

export default global.reducer