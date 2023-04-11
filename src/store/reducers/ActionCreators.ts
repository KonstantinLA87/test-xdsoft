import axios from "axios";
import { MovieSchema } from "../models/MoviesSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk<MovieSchema[]>(
  'movies/fetchAll',
  async (_, thunkApi) => {
    const { getState } = thunkApi;
    // @ts-ignore
    const years = getState().moviesReducer.years;
    // @ts-ignore
    const type = getState().moviesReducer.type;
    
    try {
      const response = await axios.get<MovieSchema[]>('http://localhost:3001/movies', {
        params: {
          years: years || null,
          type: type || null
        }
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Не удалось загрузить список фильмов');
    }
  }
)