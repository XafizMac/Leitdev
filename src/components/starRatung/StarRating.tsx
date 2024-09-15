import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const StarRating: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center space-x-2 p-2 rounded-lg">
      {/* Аватары */}
      <div className="flex -space-x-3">
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Avatar 1"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/2.jpg"
          alt="Avatar 2"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="Avatar 3"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="Avatar 4"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/4.jpg"
          alt="Avatar 5"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/5.jpg"
          alt="Avatar 6"
        />
      </div>

      {/* Рейтинг звезд */}
      <div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Image key={i} src="/icon/star.svg" width={18} height={18} alt="" />
          ))}
        </div>

        {/* Кнопка Star */}
        <div className="mt-2 flex items-center border rounded-full  w-fit border-gray-300 bg-gray-100">
          <div className="flex bg-slate-200 items-center space-x-1 px-3  bg-white rounded-l-full">
            {/* Иконка звезды */}
            <Image src="/icon/start-just.svg" width={18} height={18} alt="" />
            <span className="text-lg text-black font-semibold ">Star</span>
          </div>
          {/* Количество */}
          <div className="px-3 bg-white rounded-r-full text-lg text-black font-semibold">188</div>
        </div>
      </div>
    </div>
  );
};
