'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Title } from '../ui/title';
import { Button } from '../ui/button';
import { StarRating } from '../starRatung/StarRating';

interface Props {
  className?: string;
}

const items = [
  {
    id: 1,
    name: 'Sigma Soft',
    img: '/img/img1.png',
  },
  {
    id: 2,
    name: 'Codifylab',
    img: '/img/img2.png',
  },
  {
    id: 3,
    name: 'Startup Nation',
    img: '/img/img3.png',
  },
  {
    id: 4,
    name: 'Supabase',
    img: '/img/img4.png',
  },
  {
    id: 5,
    name: 'AI Integration',
    img: '/img/img5.png',
  },
  {
    id: 6,
    name: 'User Auth',
    img: '/img/img6.png',
  },
  {
    id: 7,
    name: 'Figma',
    img: '/img/img7.png',
  },
];

export const Content: React.FC<Props> = ({ className }) => {
  return (
    <>
      <Image
        className={'absolute left-0 top-0 z-[-1] w-[100%]'}
        alt="bg"
        src={require('../../../public/img/Background.png')}
      />
      <div className={cn('mx-auto h-full max-w-[1200px] pt-11', className)}>
        <div className="mx-auto max-w-[699px] text-center">
          <Title
            text="Руководи своим хакатоном: от начала до триумфа"
            className="text-black font-bold font-extrabold pt-20"
            size="xl"
          />
          <p className="text-black text-[22px]  my-8 font-normal">
            Платформа, где администраторы, участники и жюри встречаются для достижения лучших
            результатов
          </p>
          <Button className="rounded-3xl mx-5 px-8 py-6">
            <Image src="/icon/download.svg" width={16} height={16} alt="download" />
            <div className="ml-2"> Скачать приложение LeitApp</div>
          </Button>
          <Button className="text-black rounded-3xl px-8 py-6" variant="outline">
            Войти
          </Button>
          <div className="flex items-center justify-center mb-5">
            <StarRating />
          </div>
        </div>
        <Image className="m-auto" src="/img/list-hakaton.png" width={1123} height={703} alt="" />
        <div className="flex justify-center my-5">
          {items.map((item) => (
            <div className="bg-white rounded-2xl w-36 h-40 ml-5 flex flex-col justify-center items-center">
              <Image src={item.img} width={56} height={56} alt="" />
              <Title text={item.name} className="text-black mt-5 font-bold" size="xs" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
