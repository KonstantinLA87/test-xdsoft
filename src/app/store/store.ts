import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from './reducers/MoviesSlice';
import { movieDetailsReducer } from "./reducers/MovieDetailsSlice";

const rootReducer = combineReducers({
  moviesReducer,
  movieDetailsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']