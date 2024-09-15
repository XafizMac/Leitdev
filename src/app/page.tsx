
import Ai from "@/components/ai/ai";
import Header from "@/components/header/header";
import Posts from "@/components/posts/posts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
   <div>
   <Header/>
   <Posts/>
   <Ai/>
   </div>

  );
}
