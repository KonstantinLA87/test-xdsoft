import classNames from 'classnames';
import { memo } from 'react';

interface HomePageProps {
  className?: string;
}

const HomePage = memo((props: HomePageProps) => {
  const {className} = props;
  return (
    <div className={classNames('HomePage', {}, [className])}>
      <h1>HomePage</h1>
    </div>
  );
});

export default HomePage;