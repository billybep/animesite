import { combineReducers } from 'redux'
import { animeDetailReducer } from './features/animeDetailSlice'
import { animeFavoriteReducer } from './features/animeFavoriteSlice'

const rootReducer = combineReducers({
  animeDetailReducer,
  animeFavoriteReducer
})

export default rootReducer