import { ModeToggle } from "@/components/ui/toggel-mode";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
  

export default function Navbar() {
    return <div>
        <header className="mb-8 border-b mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl cursor-pointer text-neutral-500 dark:text-neutral-100">
            <div className=" hidden lg:flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <nav className=" gap-4 flex 2xl:ml-16 ">
            <div className="hover:-translate-y-1 transition-transform"> <Link href="/" >Home</Link></div>
            <div className="hover:-translate-y-1 transition-transform">   <Link href="/project">Projects</Link></div>
            <div className="hover:-translate-y-1 transition-transform">       <Link href="/certification">Certification</Link></div>
            <div className="hover:-translate-y-1 transition-transform">           <Link href="/about">About</Link></div>
            <div className="hover:-translate-y-1 transition-transform">       <Link href="/contact">Contact</Link></div>
                </nav>
                <div className="hidden lg:flex  justify-end items-center   max-w-2xl px-4 sm:px-6 lg:max-w-7xl gap-4">
                  <Link href="https://github.com/Ajmalniz" target="_blank"> <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform "
              size={30}
            /></Link>  
                    <Link href="https://www.linkedin.com/in/front-end-developer-headless-cms-ai-blockchain/" target="_blank">
                        <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform "
              size={30}
            /></Link>
                   <div className="hover:-translate-y-1 transition-transform"><ModeToggle /></div> 
                    
                </div>
            
            </div>
<div className='flex lg:hidden'>

<Sheet>
  <SheetTrigger>
    <Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <ul className='text-lg font-medium gap-x-4'>
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
        <li>
            <Link href="/certification">Certifiction</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        
      </ul>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

        </header>
    </div>
}