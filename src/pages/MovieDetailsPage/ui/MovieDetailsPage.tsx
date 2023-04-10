import classNames from 'classnames';
import { memo } from 'react';
import { Page } from '../../../components/Page/Page';

interface MovieDetailsPageProps {
  className?: string;
}

const MovieDetailsPage = memo((props: MovieDetailsPageProps) => {
  const {className} = props;
  return (
    <Page className={classNames('MovieDetailsPage', {}, [className])}>
      <div className="movieDetails__plate shadow-md">
        {/* top */}
        <div className="movieDetails__plate-top">
          <div className="movieDetails__avatar"></div>
          <div className="movieItem__content">
            <h1 className="text-4xl font-black">Название фильма</h1>
            <p className="movieDetails__date text-sm text-gray-500">2010</p>
            <p className="movieDetails__overview text-base">Pretium mi tincidunt ullamcorper arcu donec. Nullam metus vulputate malesuada vulputate fringilla nec non sagittis. Augue semper nam dolor tellus ridiculus. Et nisi sodales scelerisque mattis. Duis sit proin nisl non sit diam morbi.</p>
            <div className="movieDetails__team">
              <h3 className="text-xl font-bold">Команда</h3>
              <div className="movieDetails__team-wrap">
                <ul className="text-gray-400">
                  <li>Режиссер:</li>
                  <li>Сценарий:</li>
                  <li>Оператор:</li>
                  <li>Главные роли:</li>
                </ul>
                <ul className="">
                  <li>Марки Марк</li>
                  <li>Бениссио Дель Торо</li>
                  <li>Ян Ман</li>
                  <li>Джуди Фостер, Армен Джигирханян</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* carousel */}
        <div className="movieDetails__bottom">
          <h3 className="text-xl font-bold">Кадры из фильма</h3>
          <div className="movieDetails__carousel-wrap">
            <div className="movieDetails__carousel-item"></div>
            <div className="movieDetails__carousel-item"></div>
            <div className="movieDetails__carousel-item"></div>
            <div className="movieDetails__carousel-item"></div>
          </div>
        </div>
      </div>
    </Page>
  );
});

export default MovieDetailsPage;