import { Button } from "../ui/button";

export default function Ai() {
    return ( 
         <div className=" mt-10 max-w-6xl flex justify-between m-auto">

         <div className="w-1/2"><img src="/img/aiImg.png" alt="" /></div>

        <div className=" w-1/2 m-auto ml-11" >
            <h3 className="text-black text-[24px] " >CREATE YOUR FIRST AI CHATGPT APP</h3>
            <h1 className="mt-4 text-black text-[34px] font-bold">Connect your OpenAI Key and <br />
            create your AI GPT App today</h1>
            <p className="mt-4">The beauty of Horizon UI Shadcn UI template is that you can give life to <br />
            all of your data into a dashboard with a very modern and beautiful UI.</p>
            <div className="m-auto mt-8">
            <Button className="rounded-full w-[300px]  h-[70px]">Download Horizon UI for Free</Button>
            <Button className="rounded-full w-[200px]  h-[70px] ml-4" variant="outline">See live preview</Button> 
            </div>
          
        </div>
      
    </div>
    )}