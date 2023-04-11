import { ReactNode, memo, useCallback } from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = memo((props: ModalProps) => {
  const {className, children, onClose} = props;

  const closeHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <Portal>
      <div className="Modal" onClick={closeHandler}>
        <div className="Modal__content" onClick={onContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
});