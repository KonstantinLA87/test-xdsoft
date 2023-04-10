import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import { Page } from '../../../components/Page/Page';
import { FiltersBlock } from '../../../components/FiltersBlock/FiltersBlock';
import { MoviesList } from '../../../components/MoviesList/MoviesList';

interface HomePageProps {
  className?: string;
}

const HomePage = memo((props: HomePageProps) => {
  const {className} = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let url = 'http://localhost:3001/movies';
      await fetch(url)
        .then(response => response.json())
        .then(data => setMovies(data));
    }
    fetchData();
  }, []);
  
  return (
    <Page className={classNames('HomePage', {}, [className])}>
      <h1 className="text-4xl font-black uppercase">Топ-10 самых низкорейтинговых фильмов</h1>
      <FiltersBlock />
      <MoviesList movies={movies} />
    </Page>
  );
});

export default HomePage;