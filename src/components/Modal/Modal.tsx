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
      <div className="Modal w-full h-screen bg-slate-950/90 flex items-center justify-center fixed left-0 top-0 z-100" onClick={closeHandler}>
        <div className="Modal__content max-w-[90%]" onClick={onContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
});