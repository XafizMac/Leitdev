import { Button } from "../ui/button";

export default function Posts() {
    return (
    <div className=" max-w-6xl flex justify-between m-auto">
        
            <div className=" w-1/2 m-auto" >
                <h3 className="text-black text-[16px] font-bold" >#1 Публикация посты</h3>
                <h1 className="mt-4 text-black text-[34px] font-bold">Turn your data into a beautiful <br />
                and customizable dashboard</h1>
                <p className="mt-4">The beauty of Horizon UI Shadcn UI template is that you can give life to <br />
                all of your data into a dashboard with a very modern and beautiful UI.</p>
                <div className="m-auto mt-8">
                <Button className="rounded-full w-[300px]  h-[70px]">Download Horizon UI for Free</Button>
                <Button className="rounded-full w-[200px]  h-[70px] ml-4" variant="outline">See live preview</Button> 
                </div>
                <div className=" flex justify-between mt-8"  >
                        <div className="w-[220px] flex"><img src="/icon/postLogo.png" alt="" className="max-w-11 max-h-8 mr-1" /><p className="text-black text-[16px] font-bold">Clean & structured coded <br />
                        components / elements</p></div>
                        <div className="w-[220px] flex mr-11"> <img src="/icon/postLogo2.png" alt=""   className="max-w-11 max-h-8 mr-1"/><p className="text-black text-[16px] font-bold">Full responsive desktop <br />
                        and mobile sections</p></div>
                </div>
            </div>
            <div className="w-1/2"><img src="/img/postImage.png" alt="" /></div>
        </div>
    )
}