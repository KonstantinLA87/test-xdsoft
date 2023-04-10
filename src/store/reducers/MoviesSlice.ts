import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieSchema } from "../models/MoviesSchema";
import { fetchMovies } from './ActionCreators';

interface MoviesState {
  movies: MovieSchema[],
  isLoading: boolean,
  error: string,
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: '',
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchMovies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<MovieSchema[]>) => {
      state.isLoading = false;
      state.error = '';
      state.movies = action.payload;
    },
    [fetchMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default moviesSlice.reducer;