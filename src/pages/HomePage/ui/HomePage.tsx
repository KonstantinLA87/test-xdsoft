import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { Page } from '../../../components/Page/Page';
import { FiltersBlock } from '../../../components/FiltersBlock/FiltersBlock';
import { MoviesList } from '../../../components/MoviesList/MoviesList';
import { movieType, moviesYears } from '../../../store/models/MoviesSchema';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import { moviesActions } from '../../../store/reducers/MoviesSlice';
import { fetchMovies } from '../../../store/reducers/ActionCreators';

interface HomePageProps {
  className?: string;
}

const HomePage = memo((props: HomePageProps) => {
  const {className} = props;
  const dispatch = useAppDispatch();
  const {years, type} = useAppSelector(state => state.moviesReducer);

  const fetchData = useCallback(() => {
    dispatch(fetchMovies())
  }, [dispatch]);

  const onChangeType = useCallback((newType: movieType) => {
    dispatch(moviesActions.setType(newType));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeYears = useCallback((newYears: moviesYears) => {
    dispatch(moviesActions.setYears(newYears));
    fetchData();
  }, [dispatch, fetchData]);
  
  return (
    <Page className={classNames('HomePage', {}, [className])}>
      <h1 className="text-2xl sm:text-4xl font-black text-white">Топ-10 самых низкорейтинговых фильмов и сериалов</h1>
      <FiltersBlock
        type={type}
        years={years}
        onChangeType={onChangeType}
        onChangeYears={onChangeYears}
      />
      <MoviesList />
    </Page>
  );
});

export default HomePage;