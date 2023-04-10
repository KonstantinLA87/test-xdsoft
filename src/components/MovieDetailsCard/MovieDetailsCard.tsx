import { memo } from 'react';
import { Carousel } from '../Carousel/Carousel';

interface MovieDetailsCardProps {
  className?: string;
}

export const MovieDetailsCard = memo((props: MovieDetailsCardProps) => {
  const {} = props;

  return (
    <div className="movieDetails__card shadow-md">

      <div className="movieDetails__card-top">
        <div className="movieDetails__avatar"></div>
        <div className="movieItem__content">
          <h1 className="text-4xl font-black">Title</h1>
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

      <div className="movieDetails__bottom">
        <Carousel />
      </div>
    </div>
  );
});