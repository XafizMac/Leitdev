import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { text } from "stream/consumers";
import { Badge } from "@/components/ui/badge"
export default function Header() {
  return (
    <div className="max-w-6xl h-16  bg-emerald-000  sticky top-0 m-auto backdrop-blur-md  rounded-3xls">
    <div className="container mx-auto px-4 h-full">
      <div className="flex justify-between items-center h-full">
        <div className=" flex justify-between items-center h-full gap-x-2 "   >
          <img src="/icon/logo.png" alt="" />
          <h1 className= "text-[30px] font-bold">Leitdev</h1>
           <Badge variant="outline" className=" ml-3 mt-1">Demo</Badge>
        </div>
        
        
        <ul className="hidden md:flex gap-x-6 text-stone-700 ">
          <li>
            <Link href="/about">
              <p className="text-[14px]">Хакатоны</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="text-[14px]">PRO версия</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <p className="text-[14px]">Спонсоры и партнеры</p>
            </Link>
          </li>
        </ul>
         <Button variant="secondary" className="rounded-3xl h-8">Скачать бесплатно <ChevronRight className="size-3" /></Button>
      </div>
    </div>
  </div>
  );
}
