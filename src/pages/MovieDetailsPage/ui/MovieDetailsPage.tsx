import { MovieDetailsCard } from 'entities/MovieDetailsCard/MovieDetailsCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

const MovieDetailsPage = memo(() => {
  const { id } = useParams<{id: string}>();

  return (
    <Page>
      {/* @ts-ignore */}
      <MovieDetailsCard id={id} />
    </Page>
  );
});

export default MovieDetailsPage;