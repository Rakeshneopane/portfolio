import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav className="bg-white/80 backdrop-blur border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold"> Rakesh Neopane </div>

                    <div className="hidden md:flex gap-8 text-sm font-medium">
                        <a href="#projects" className="hover:text-blue-600">Projects</a>
                        <a href="#skills" className="hover:text-blue-600">Skills</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </div>
                
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                </div>
                    {/* Mobile Menu */}
                    {open && (
                    <div className="md:hidden py-4 flex flex-col gap-4 text-sm">
                        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                    </div>
                    )}
                
            </div>
        </nav>
    )
}