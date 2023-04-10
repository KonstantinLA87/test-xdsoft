import { memo } from 'react';
import { MovieItem } from '../MovieItem/MovieItem';

interface MoviesListProps {
  className?: string;
}

export const MoviesList = memo((props: MoviesListProps) => {
  const {className} = props;
  return (
    <div className="moviesList">
      <MovieItem />
    </div>
  );
});