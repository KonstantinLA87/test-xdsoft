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
    <div className="movieDetails__card w-full bg-white rounded-lg shadow-md">
      {isLoading && <MovieDetailsCardSkeleton/>}
      {error && <h1>Фильм не найден</h1>}
      {!isLoading && (
        <>
          <div className="flex flex-wrap flex-col sm:flex-row gap-7 p-5 sm:p-10 border-b-[1px] border-slate-200 border-solid">
            <div className="w-[210px] h-[280px] bg-slate-200 overflow-hidden rounded">
              <img className="w-full h-full" src={data?.titlePhoto} alt="" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-black leading-6 mb-2">{data?.title}</h1>
              <p className="text-sm text-gray-500">{data?.date}</p>
              <p className="mt-4 text-base">{data?.overview}</p>
              <div className="mt-5">
                <h3 className="text-lg font-medium">Команда:</h3>
                <div className="flex flex-wrap gap-7 mb-2 text-sm sm:text-base">
                  <ul className="text-gray-400">
                    <li>Режиссер:</li>
                    <li>Сценарий:</li>
                    <li>Оператор:</li>
                    <li>Главные роли:</li>
                  </ul>
                  <ul className="flex-1">
                    <li>{data?.team.director}</li>
                    <li>{data?.team.scenario}</li>
                    <li>{data?.team.operator}</li>
                    <li>{data?.team.roles.join(', ')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="movieDetails__bottom px-5 sm:px-10 pt-7 pb-12">
            {data?.photos && <Carousel images={data?.photos} />}
          </div>
        </>      
      )}
    </div>
  );
});