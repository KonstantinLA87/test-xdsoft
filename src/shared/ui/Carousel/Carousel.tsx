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
      <h3 className="text-xl sm:text-2xl font-bold mb-4">Кадры из фильма</h3>
      <div className="flex gap-4 overflow-y-hidden overflow-x-scroll pb-2">
        {images && images.map(image => (
            <img 
              className="h-[120px] sm:h-[150px] rounded cursor-pointer"
              src={image} 
              alt="" 
              onClick={() => openModal(image)}
            />
        ))}
      </div>
    </>
  );
});