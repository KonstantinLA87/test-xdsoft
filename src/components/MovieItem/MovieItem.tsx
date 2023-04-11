// import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface MovieItemProps {
  className?: string;
  movie: any;
}

export const MovieItem = memo((props: MovieItemProps) => {
  const {movie} = props;
  return (
    <Link to={`/details/${movie.id}`} className="movieItem shadow-md">
      <div className="movieItem__avatar">
        <img src={movie.titlePhoto} alt="" />
      </div>
      <div className="movieItem__content">
        <h3 
          className="text-2xl font-bold">
          {movie.title} 
          <span className="text-base font-medium text-gray-400">({movie.type})</span>
        </h3>
        <p className="movieItem__date text-sm text-gray-500">{movie.date}</p>
        <p className="movieItem__overview text-sm">{movie.overview}</p>
        <button className="text-sm">Подробнее</button>
      </div>
    </Link>
  );
});