import { ModeToggle } from "@/components/ui/toggel-mode";
import{Github,Linkedin} from "lucide-react"
import Link from "next/link";

export default function Navbar() {
    return <div>
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    <Link href="/">Home</Link>{/*folders name changed */}
                    <Link href="/project">Projects</Link>
                    <Link href="/certification">Certification</Link>
                    <Link href="/about">About</Link>
                </nav>
                <div className="flex  justify-end items-center   max-w-2xl px-4 sm:px-6 lg:max-w-7xl gap-12">
                  <Link href="https://github.com/Ajmalniz" target="_blank"> <Github /></Link>  
                    <Link href="https://www.linkedin.com/in/front-end-developer-headless-cms-ai-blockchain/" target="_blank"><Linkedin /></Link>
                    <ModeToggle />
                    
                </div>
            
            </div>
        </header>
    </div>
}