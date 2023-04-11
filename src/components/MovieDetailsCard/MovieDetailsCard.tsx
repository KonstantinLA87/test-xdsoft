import { memo, useEffect } from 'react';
import { Carousel } from '../Carousel/Carousel';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { MovieDetailsCardSkeleton } from './MovieDetailsCardSkeleton';
import { fetchMovieById } from '../../store/reducers/fetchMovieById';

interface MovieDetailsCardProps {
  className?: string;
  id: string;
}

export const MovieDetailsCard = memo((props: MovieDetailsCardProps) => {
  const {id} = props;
  const dispatch = useAppDispatch();
  const {data, isLoading, error} = useAppSelector(state => state.movieDetailsReducer);

  useEffect(() => {
    dispatch(fetchMovieById(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <div className="movieDetails__card shadow-md">
      {isLoading && <MovieDetailsCardSkeleton/>}
      {error && <h1>Фильм не найден</h1>}
      {!isLoading && (
        <>
          <div className="movieDetails__card-top">
            <div className="movieDetails__avatar">
              <img src={data?.titlePhoto} alt="" />
            </div>
            <div className="movieItem__content">
              <h1 className="text-2xl md:text-4xl font-black">{data?.title}</h1>
              <p className="movieDetails__date text-sm text-gray-500">{data?.date}</p>
              <p className="movieDetails__overview text-base">{data?.overview}</p>
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
                    <li>{data?.team.director}</li>
                    <li>{data?.team.scenario}</li>
                    <li>{data?.team.operator}</li>
                    <li>{data?.team.roles.join(', ')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="movieDetails__bottom">
            {data?.photos && <Carousel images={data?.photos} />}
          </div>
        </>      
      )}
    </div>
  );
});