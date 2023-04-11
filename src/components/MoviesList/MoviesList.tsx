import { memo, useEffect } from 'react';
import { MovieItem } from '../MovieItem/MovieItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchMovies } from '../../store/reducers/ActionCreators';
import { moviesActions } from '../../store/reducers/MoviesSlice';

interface MoviesListProps {
  className?: string;
}

export const MoviesList = memo((props: MoviesListProps) => {
  // const {} = props;
  const dispatch = useAppDispatch();
  const {movies, isLoading, error} = useAppSelector(state => state.moviesReducer);

  useEffect(() => {
    dispatch(fetchMovies());
    // dispatch(moviesActions.initState());
  }, [dispatch]);

  return (
    <div className="moviesList">
      {isLoading && <h2>Идет загрузка</h2>}
      {error && <h2>{error}</h2>}
      {movies.map(movie => (
        <MovieItem
          key={movie.id} 
          movie={movie}
        />
      ))}
    </div>
  );
});