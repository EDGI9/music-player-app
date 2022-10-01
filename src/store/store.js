import { configureStore } from '@reduxjs/toolkit'
import artistReducer from './slices/artistSlice'
import globalReducer from './slices/globalSlice'
import playerReducer from './slices/playerSlice'
import playlistReducer from './slices/playlistSlice'


export default configureStore({
  reducer: {
    artist: artistReducer,
    global: globalReducer,
    player: playerReducer,
    playlist: playlistReducer
  }
})
