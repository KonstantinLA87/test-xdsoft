import classNames from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LogoSvg} from '../../assets/logo.svg';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  return (
    <div className="flex jusify-between items-center h-[60px] px-[30px] shadow-md bg-white">
      <Link to={'/'} className="flex items-center gap-2">
        <LogoSvg />
        <span className="text-xl">Кино<b>вТопку</b></span>
      </Link>
    </div>
  );
});