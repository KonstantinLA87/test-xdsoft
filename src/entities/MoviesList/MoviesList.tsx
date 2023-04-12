import { useAppDispatch, useAppSelector } from 'app/store/hooks/redux';
import { fetchMovies } from 'app/store/reducers/ActionCreators';
import { MovieItem } from 'entities/MovieItem/MovieItem';
import { memo, useEffect } from 'react';

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
      {isLoading && <h2 className="text-white text-xl sm:text-2xl font-medium">Идет загрузка...</h2>}
      {error && <h2 className="text-white">{error}</h2>}
      {(!movies.length && !isLoading) && <h3 className="text-white text-xl sm:text-2xl font-medium">Фильмов и сериалов по вашему запросу не найдено</h3>}
      {(!isLoading && !error) && movies.map(movie => (
        <MovieItem
          key={movie.id} 
          movie={movie}
        />
      ))}
    </div>
  );
});