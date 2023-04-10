import classNames from 'classnames';
import { memo, useEffect } from 'react';
import { Page } from '../../../components/Page/Page';
import { FiltersBlock } from '../../../components/FiltersBlock/FiltersBlock';
import { MoviesList } from '../../../components/MoviesList/MoviesList';

interface HomePageProps {
  className?: string;
}

const HomePage = memo((props: HomePageProps) => {
  const {className} = props;

  useEffect(() => {
    let url =  'http://localhost:3001/movies';
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
      
    } catch (error) {
      
    }
  }, []);

  return (
    <Page className={classNames('HomePage', {}, [className])}>
      <h1 className="text-4xl font-black uppercase">Топ-10 самых низкорейтинговых фильмов</h1>
      <FiltersBlock />
      <MoviesList />
    </Page>
  );
});

export default HomePage;