import classNames from 'classnames';
import { memo } from 'react';
import { Page } from '../../../components/Page/Page';
import { MovieDetailsCard } from '../../../components/MovieDetailsCard/MovieDetailsCard';

interface MovieDetailsPageProps {
  className?: string;
}

const MovieDetailsPage = memo((props: MovieDetailsPageProps) => {
  const {className} = props;

  return (
    <Page className={classNames('MovieDetailsPage', {}, [className])}>
      <MovieDetailsCard />
    </Page>
  );
});

export default MovieDetailsPage;