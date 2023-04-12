import { memo, useEffect } from 'react';
import { MovieItem } from '../MovieItem/MovieItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchMovies } from '../../store/reducers/ActionCreators';

interface MoviesListProps {
  className?: string;
}

export const MoviesList = memo((props: MoviesListProps) => {
  // const {} = props;
  const dispatch = useAppDispatch();
  const {movies, isLoading, error} = useAppSelector(state => state.moviesReducer);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-5 w-full mt-7">
      {isLoading && <h2 className="text-white text-2xl font-medium">Идет загрузка...</h2>}
      {error && <h2 className="text-white">{error}</h2>}
      {(!movies.length && !isLoading) && <h3 className="text-white text-2xl font-medium">Фильмов и сериалов по вашему запросу не найдено</h3>}
      {(!isLoading && !error) && movies.map(movie => (
        <MovieItem
          key={movie.id} 
          movie={movie}
        />
      ))}
    </div>
  );
});