import { memo } from 'react';

interface CarouselProps {
  className?: string;
}

export const Carousel = memo((props: CarouselProps) => {
  return (
    <>
      <h3 className="text-xl font-bold">Кадры из фильма</h3>
      <div className="movieDetails__carousel-wrap">
        <div className="movieDetails__carousel-item"></div>
        <div className="movieDetails__carousel-item"></div>
        <div className="movieDetails__carousel-item"></div>
        <div className="movieDetails__carousel-item"></div>
      </div>
    </>
  );
});