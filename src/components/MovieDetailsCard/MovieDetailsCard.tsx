import { memo, useEffect } from 'react';
import { Carousel } from '../Carousel/Carousel';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchMovies } from '../../store/reducers/ActionCreators';
import { useParams } from 'react-router-dom';
import { MovieDetailsCardSkeleton } from './MovieDetailsCardSkeleton';
import { moviesActions } from '../../store/reducers/MoviesSlice';

interface MovieDetailsCardProps {
  className?: string;
}

export const MovieDetailsCard = memo((props: MovieDetailsCardProps) => {
  const dispatch = useAppDispatch();
  const {movies, isLoading, error} = useAppSelector(state => state.moviesReducer);
  const { id } = useParams<{id: string}>();
  // @ts-ignore
  const numId = id - 1;
  const movie = movies[numId];
  const team = movie?.team;

  useEffect(() => {
    dispatch(moviesActions.initState());
    dispatch(fetchMovies());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className="movieDetails__card shadow-md">
      {(isLoading && !movies.length) && <MovieDetailsCardSkeleton/>}
      {error && <h1>Фильм не найден</h1>}
      {movies.length === 10 && (
        <>
          <div className="movieDetails__card-top">
            <div className="movieDetails__avatar">
              <img src={movie?.titlePhoto} alt="" />
            </div>
            <div className="movieItem__content">
              <h1 className="text-2xl md:text-4xl font-black">{movie?.title}</h1>
              <p className="movieDetails__date text-sm text-gray-500">{movie?.date}</p>
              <p className="movieDetails__overview text-base">{movie?.overview}</p>
              <div className="movieDetails__team">
                <h3 className="text-xl font-bold">Команда</h3>
                <div className="movieDetails__team-wrap">
                  <ul className="text-gray-400">
                    <li>Режиссер:</li>
                    <li>Сценарий:</li>
                    <li>Оператор:</li>
                    <li>Главные роли:</li>
                  </ul>
                  <ul className="ul2">
                    <li>{team.director}</li>
                    <li>{team.scenario}</li>
                    <li>{team.operator}</li>
                    <li>{team.roles.join(', ')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="movieDetails__bottom">
            <Carousel images={movie?.photos} />
          </div>
        </>
      
      )}
      
    </div>
  );
});