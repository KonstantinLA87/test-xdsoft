import { memo } from 'react';

interface MovieDetailsCardProps {
  className?: string;
}

export const MovieDetailsCardSkeleton = memo((props: MovieDetailsCardProps) => {
  return (
    <div className="movieDetails__card w-full bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap flex-col sm:flex-row gap-7 p-5 sm:p-10 border-b-[1px] border-slate-200 border-solid">
        <div className="w-[210px] h-[280px] bg-slate-200 overflow-hidden rounded">
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-black leading-6 mb-2">Title</h1>
          <p className="text-sm text-gray-500">date</p>
          <p className="mt-4 text-base">overview</p>
          <div className="mt-5">
            <h3 className="text-lg font-medium">Команда:</h3>
            <div className="flex flex-wrap gap-7 mb-2 text-sm sm:text-base">
              <ul className="text-gray-400">
                <li>Режиссер:</li>
                <li>Сценарий:</li>
                <li>Оператор:</li>
                <li>Главные роли:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});