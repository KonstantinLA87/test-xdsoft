// import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface MovieItemProps {
  className?: string;
}

export const MovieItem = memo((props: MovieItemProps) => {
  const {className} = props;
  return (
    <Link to={'/details'} className="movieItem shadow-md">
      <div className="movieItem__avatar">
      </div>
      <div className="movieItem__content">
        <h3 className="text-2xl font-bold">Название фильма</h3>
        <p className="movieItem__date text-sm text-gray-500">2010</p>
        <p className="movieItem__overview text-sm">Pretium mi tincidunt ullamcorper arcu donec. Nullam metus vulputate malesuada vulputate fringilla nec non sagittis. Augue semper nam dolor tellus ridiculus. Et nisi sodales scelerisque mattis. Duis sit proin nisl non sit diam morbi.</p>
        <button className="text-sm">Подробнее</button>
      </div>
    </Link>
  );
});