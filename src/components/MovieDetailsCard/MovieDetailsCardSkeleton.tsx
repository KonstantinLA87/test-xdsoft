import { memo } from 'react';
import { Carousel } from '../Carousel/Carousel';


interface MovieDetailsCardProps {
  className?: string;
}

export const MovieDetailsCardSkeleton = memo((props: MovieDetailsCardProps) => {
  return (
    <div className="movieDetails__card shadow-md">
      <div className="movieDetails__card-top">
        <div className="movieDetails__avatar">
        </div>
        <div className="movieItem__content">
          <h1 className="text-4xl font-black">Some</h1>
          <p className="movieDetails__date text-sm text-gray-500">Some</p>
          <p className="movieDetails__overview text-base">Some</p>
          <div className="movieDetails__team">
            <h3 className="text-xl font-bold">Команда</h3>
            <div className="movieDetails__team-wrap">
              <ul className="text-gray-400">
                <li>Режиссер:</li>
                <li>Сценарий:</li>
                <li>Оператор:</li>
                <li>Главные роли:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="movieDetails__bottom">
        {/* <Carousel images={movies[numId]?.photos} /> */}
      </div>      
    </div>
  );
});