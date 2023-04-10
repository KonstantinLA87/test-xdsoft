import { memo } from 'react';
import { MovieItem } from '../MovieItem/MovieItem';

interface MoviesListProps {
  className?: string;
  movies: Array<any>;
}

export const MoviesList = memo((props: MoviesListProps) => {
  const { movies } = props;
  return (
    <div className="moviesList">
      {movies.map(movie => (
          <MovieItem
            key={movie.id} 
            movie={movie}
          />
      ))}
    </div>
  );
});