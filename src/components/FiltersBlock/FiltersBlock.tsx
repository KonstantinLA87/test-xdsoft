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
        <option value="serial">Фильмы и сериалы</option>
        <option value="serial">Только сериалы</option>
        <option value="movie">Только фильмы</option>
      </select>
      <select 
        name="year" 
        id=""
        className="shadow-md"
        >
        <option>Все года</option>
        <option>2020-е</option>
        <option>2010-е</option>
        <option>2000-е</option>
        <option>1990-е</option>
      </select>
    </div>
  );
});