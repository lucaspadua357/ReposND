import Logo from "../assets/LOGO.svg"
import {User, Instagram, Dribbble, Twitter, Facebook } from "lucide-react"; 

export function Footer() {
    return(
        <footer className="w-full bg-black px-32 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={Logo}/>
                <span className="text-xl text-white font-poppins">znisa</span>
            </div>

            <nav className="flex items-center gap-16 border bg-gray-950 border-s-yellow-200 border-r-violet-500 border-b-amber-200 border-t-violet-500 rounded-full px-6 py-2">
                <Twitter href="#" size={16} className="text-gray-300 bg-gray-900 rounded-full"/>
                <Dribbble href="#" size={16} className="text-gray-300 bg-gray-900 rounded-full"/>
                <Instagram href="#" size={16} className="text-gray-300 bg-gray-900 rounded-full"/>
                <Facebook href="#" size={16} className="text-gray-300 bg-gray-900 rounded-full"/>
            </nav>

            <div className="flex items-center px-6 py-2">
                <button className="bg-gradient-to-r from-violet-500 to-yellow-200 text-black font-semibold px-4 py-2 rounded-full">Hire me</button>
                <button className="bg-gradient-to-r from-violet-500 to-yellow-200 p-2 rounded-full"><User size={20} className="text-black"/></button>
            </div>

        </footer>
    );
}