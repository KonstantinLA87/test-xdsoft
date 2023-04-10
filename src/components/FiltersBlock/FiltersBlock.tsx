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
        name="year" 
        id=""
        className="shadow-md"
        >
        <option>2010</option>
      </select>
      <select 
        name="type" 
        id=""
        className="shadow-md"
      >
        <option value="serial">Сериал</option>
        <option value="movie">Фильм</option>
      </select>
    </div>
  );
});