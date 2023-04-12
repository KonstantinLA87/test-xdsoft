// import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

interface MovieItemProps {
  className?: string;
  movie: any;
}

export const MovieItem = memo((props: MovieItemProps) => {
  const {movie} = props;
  return (
    <Link to={`/details/${movie.id}`} className="movieItem w-full bg-white p-6 pb-8 shadow-md rounded-lg flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-7 transition-all">
      <div className="w-[150px] h-[200px] rounded overflow-hidden bg-slate-200">
        <img className="w-full h-full" src={movie.titlePhoto} alt="" />
      </div>
      <div className="flex-1 max-w-[600px]">
        <h3 className="mb-2 text-2xl font-bold leading-6">
          {movie.title} 
          <span className="text-base font-medium text-gray-400">({movie.type})</span>
        </h3>
        <p className="text-sm text-gray-400">{movie.date}</p>
        <p className="text-sm mt-3">{movie.overview}</p>
        <Button className="mt-5">Подробнее</Button>
      </div>
    </Link>
  );
});