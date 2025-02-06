import Logo from "../assets/LOGO.svg";
import { Home, User } from "lucide-react";

export function Header() {
    return(
        <header className="w-full bg-black px-32 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={Logo}/>
                <span className="text-xl text-white font-poppins">znisa</span>
            </div>

            <nav className="flex items-center gap-16 border bg-gray-950 border-s-yellow-200 border-r-violet-500 border-b-amber-200 border-t-violet-500 rounded-full px-6 py-2">
                <Home href="#" size={16} className="text-gray-300 bg-gray-900 rounded-full"/>
                <a href="#" className="text-white hover:text-gray-300">About</a>
                <a href="#" className="text-white hover:text-gray-300">Projects</a>
                <a href="#" className="text-white hover:text-gray-300">Contact me</a> 
            </nav>

            <div className="flex items-center px-6 py-2">
                <button className="bg-gradient-to-r from-violet-500 to-yellow-200 text-black font-semibold px-4 py-2 rounded-full">Hire me</button>
                <button className="bg-gradient-to-r from-violet-500 to-yellow-200 p-2 rounded-full"><User size={20} className="text-black"/></button>
            </div>



        </header>
    );
}