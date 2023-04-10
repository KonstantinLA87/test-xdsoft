import classNames from 'classnames';
import { memo } from 'react';

interface MovieDetailsPageProps {
  className?: string;
}

const MovieDetailsPage = memo((props: MovieDetailsPageProps) => {
  const {className} = props;
  return (
    <div className={classNames('MovieDetails', {}, [className])}>
      <h1>Movie Details Page</h1>
    </div>
  );
});

export default MovieDetailsPage;