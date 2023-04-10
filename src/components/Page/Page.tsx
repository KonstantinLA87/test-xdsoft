import { ReactNode, memo } from 'react';
import './Page.css';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const {className, children} = props;
  return (
    <div>
      <div className="Page container mx-auto">
        {children}
      </div>
    </div>
  );
});