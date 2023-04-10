import classNames from 'classnames';
import { memo } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  return (
    <div className="flex jusify-between items-center h-[60px] px-[30px] shadow-md bg-white">
      <h2>LOGO</h2>
    </div>
  );
});