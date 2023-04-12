import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieSchema } from "../models/MoviesSchema";
import { fetchMovieById } from './fetchMovieById';

interface MovieDetailsState {
  isLoading: boolean,
  error?: string,
  data?: MovieSchema
}

const initialState: MovieDetailsState = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const movieDetailsSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieById.pending.type]: (state) => {
      state.error = '';
      state.isLoading = true;
    },
    [fetchMovieById.fulfilled.type]: (state, action: PayloadAction<MovieSchema>) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    [fetchMovieById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const { reducer: movieDetailsReducer} = movieDetailsSlice;
export const { actions: movieDetailsActions} = movieDetailsSlice;