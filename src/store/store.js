import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/playerSlice'
import playlistReducer from './slices/playlistSlice'


export default configureStore({
  reducer: {
    player: playerReducer,
    playlist: playlistReducer
  }
})
