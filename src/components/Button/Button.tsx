import classNames from 'classnames';
import { ReactNode, memo } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {children, className} = props;

  return (
    <button className={classNames('text-sm text-slate-800 py-3 px-4 rounded transition-all border border-solid border-slate-300', {}, [className])}>
      {children}
    </button>
  );
});