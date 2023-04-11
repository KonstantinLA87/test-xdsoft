import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieSchema, moviesYears, movieType } from "../models/MoviesSchema";
import { fetchMovies } from './ActionCreators';

interface MoviesState {
  movies: MovieSchema[],
  isLoading: boolean,
  error: string,
  type: movieType,
  years: moviesYears,
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: '',
  type: movieType.ALL,
  years: moviesYears.ALL,
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<movieType>) => {
      state.type = action.payload;
    },
    setYears: (state, action: PayloadAction<moviesYears>) => {
      state.years = action.payload;
    },
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

export const { reducer: moviesReducer} = moviesSlice;
export const { actions: moviesActions} = moviesSlice;