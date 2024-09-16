// pages/index.js
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Главный контейнер с двумя колонками */}
      <div className="flex flex-col lg:flex-row w-8xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Левая колонка - Бесплатная версия */}
        <div className="lg:w-2/3 p-8">
          <h2 className="text-[48px] font-extrabold text-gray-900">Free</h2>
          <p className="text-gray-500 font-bold text-[16px]">Open-source (MIT License)</p>
          <p className="mt-2 text-gray-700 text-[16px] ">An open-source demo version of Horizon AI Boilerplate for <br />
          entry-level ChatGPT-based AI applications (Chat UI page).</p>
          <button className="mt-4 bg-black text-white w-[710px] h-[70px] rounded-full py-2 px-4 ">
            Download for Free 
          </button>

          {/* Вставка изображения dashboard */}
          <div className="mt-8">
            <Image
              src="/img/demoImg.png" // замените на реальный путь к изображению
              alt="Main Dashboard"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

      
        </div>

        {/* Правая колонка - Pro версия */}
        <div className="lg:w-1/3 bg-gradient-to-b from-purple-500 to-pink-500 p-8 flex flex-col items-center text-white">
          <h2 className="text-[48px] font-extrabold">PRO</h2>
          <p className="mt-2 font-bold text-[16px]">Premium Shadcn UI Boilerplate</p>
          <p className="mt-2 text-white text-[16px] ">The right choice for developer teams <br />
          working on high-end web applications.</p>
          <button className="mt-4  backdrop-blur-md border-gray-300 border-2  text-white-600 w-[305px] h-[70px] rounded-full py-2 px-4 rounded">
            Get started with PRO
          </button>

          {/* Вставка изображений */}
          <div className="mt-8">
            <Image
              src="/img/demoImg2.png" // замените на реальный путь к изображению
              alt="Pro Dashboard"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
