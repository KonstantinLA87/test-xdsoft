import { memo, useState } from 'react';
import { Modal } from '../Modal/Modal';

interface CarouselProps {
  className?: string;
  images: string[];
}

export const Carousel = memo((props: CarouselProps) => {
  const {images} = props;
  const [modal, setModal] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const openModal = (src: string) => {
    setModal(true);
    setImageSrc(src);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <>
      {modal && (
        <Modal onClose={closeModal}>
          <img src={imageSrc} alt="" />
        </Modal>
      )}
      <h3 className="text-xl font-bold">Кадры из фильма</h3>
      <div className="movieDetails__carousel-wrap">
        {images && images.map(image => (
            <img 
              src={image} 
              alt="" 
              onClick={() => openModal(image)}
            />
        ))}
      </div>
    </>
  );
});