import { movieType, moviesYears } from "app/store/models/MoviesSchema";

export interface HomePageSchena {
  isLoading?: boolean;
  error?: string;

  // filters
  type: movieType;
  years: moviesYears;
}