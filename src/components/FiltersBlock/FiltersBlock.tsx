// import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface FiltersBlockProps {
  className?: string;
}

export const FiltersBlock = memo((props: FiltersBlockProps) => {
  const {className} = props;
  return (
    <div className="filtersBlock">
      <select 
        name="type" 
        id=""
        className="shadow-md"
      >
        <option value="all">Фильмы и сериалы</option>
        <option value="movie">Только фильмы</option>
        <option value="serial">Только сериалы</option>
      </select>
      <select 
        name="year" 
        id=""
        className="shadow-md"
        >
        <option value="all">Все года</option>
        <option value="2020">2020-е</option>
        <option value="2010">2010-е</option>
        <option value="2000">2000-е</option>
        <option value="1990">1990-е</option>
      </select>
    </div>
  );
});