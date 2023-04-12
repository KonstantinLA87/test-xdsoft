import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { Page } from 'widgets/Page/Page';
import { moviesActions } from 'app/store/reducers/MoviesSlice';
import { fetchMovies } from 'app/store/reducers/ActionCreators';
import { FiltersBlock } from 'widgets/FiltersBlock/FiltersBlock';
import { movieType, moviesYears } from 'app/store/models/MoviesSchema';
import { useAppDispatch, useAppSelector } from 'app/store/hooks/redux';
import { MoviesList } from 'entities/MoviesList/MoviesList';

const HomePage = memo(() => {
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
    <Page>
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