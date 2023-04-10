import axios from "axios";
import { MovieSchema } from "../models/MoviesSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  'movies/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<MovieSchema[]>('http://localhost:3001/movies');
      return response.data;  
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильмы')
    }
  }
)