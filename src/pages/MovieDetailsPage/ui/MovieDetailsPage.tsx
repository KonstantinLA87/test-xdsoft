import classNames from 'classnames';
import { memo } from 'react';
import { Page } from '../../../components/Page/Page';
import { MovieDetailsCard } from '../../../components/MovieDetailsCard/MovieDetailsCard';
import { useParams } from 'react-router-dom';

interface MovieDetailsPageProps {
  className?: string;
}

const MovieDetailsPage = memo((props: MovieDetailsPageProps) => {
  const {className} = props;
  const { id } = useParams<{id: string}>();

  return (
    <Page className={classNames('MovieDetailsPage', {}, [className])}>
      {/* @ts-ignore */}
      <MovieDetailsCard id={id} />
    </Page>
  );
});

export default MovieDetailsPage;