import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import { Page } from '../../../components/Page/Page';
import { FiltersBlock } from '../../../components/FiltersBlock/FiltersBlock';
import { MoviesList } from '../../../components/MoviesList/MoviesList';
import { useAppSelector } from '../../../store/hooks/redux';

interface HomePageProps {
  className?: string;
}

const HomePage = memo((props: HomePageProps) => {
  const {className} = props;
  
  return (
    <Page className={classNames('HomePage', {}, [className])}>
      <h1 className="text-2xl sm:text-4xl font-black">Топ-10 самых низкорейтинговых фильмов и сериалов</h1>
      <FiltersBlock />
      <MoviesList />
    </Page>
  );
});

export default HomePage;