import { ReactNode, memo } from 'react';
import './Page.css';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const {className, children} = props;
  return (
    <div className="mt-10 sm:mt-14 pb-24">
      <div className="Page container max-w-[1020px] px-4 mx-auto">
        {children}
      </div>
    </div>
  );
});