import axios from "axios";
import { MovieSchema } from "../models/MoviesSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovieById = createAsyncThunk<MovieSchema, string>(
  'movies/fetchMovieById',
  async (movieId, thunkApi) => {
    
    try {
      const response = await axios.get<MovieSchema>(`http://localhost:3001/movies/${movieId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Не удалось загрузить фильм');
    }
  }
)