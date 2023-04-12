// import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from '../Select/Select';
import { movieType, moviesYears } from '../../store/models/MoviesSchema';

interface FiltersBlockProps {
  className?: string;
  type: movieType;
  years: moviesYears;
  onChangeType: (newType: movieType) => void;
  onChangeYears: (newYears: moviesYears) => void;
}

export const FiltersBlock = memo((props: FiltersBlockProps) => {
  const {type, years, onChangeType, onChangeYears} = props;

  const typeOptions = useMemo<SelectOption<movieType>[]>(() => [
    {value: movieType.ALL, content: 'Фильмы и сериалы'},
    {value: movieType.MOVIE, content: 'Только фильмы'},
    {value: movieType.SERIAL, content: 'Только сериалы'},
  ], []);

  const yearsOptions = useMemo<SelectOption<moviesYears>[]>(() => [
    {value: moviesYears.ALL, content: 'Все года'},
    {value: moviesYears.Y2020, content: '2020-е'},
    {value: moviesYears.Y2010, content: '2010-е'},
    {value: moviesYears.Y2000, content: '2000-е'},
    {value: moviesYears.Y1990, content: '1990-е'},
  ], []);

  return (
    <div className="flex gap-4 sm:gap-8">
      <Select 
        label="По типу:" 
        options={typeOptions}
        value={type}
        onChange={onChangeType}
      />
      <Select 
        label="По годам:" 
        options={yearsOptions}
        value={years}
        onChange={onChangeYears}
      />
    </div>
  );
});