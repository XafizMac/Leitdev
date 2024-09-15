import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const ComutiryBanner: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-black text-white rounded-3xl p-8 flex justify-between items-center max-w-6xl mx-auto h-[200px] mt-20">
      {/* Левая часть: Текст и иконка */}
      <div className="flex items-center space-x-4">
        {/* Иконка Discord */}
        <Image src="/icon/discord.svg" alt="" width={56} height={56} />
        {/* Текст */}
        <div>
          <h2 className="text-2xl font-bold">Общайтесь с сообществом!</h2>
          <p className="text-gray-400">
            Не стесняйтесь задавать вопросы, сообщать о проблемах и знакомиться с новыми людьми.
          </p>
        </div>
      </div>

      {/* Кнопка */}
      <Button className="bg-black rounded-3xl p-6 border">Join the #Leitdev Community!</Button>
    </div>
  );
};
