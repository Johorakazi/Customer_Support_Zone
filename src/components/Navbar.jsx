import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-10 py-5 flex justify-between items-center sticky top-0 z-50">
          
            <div className="text-xl font-bold text-gray-900 tracking-wide">
                CS — Ticket System
            </div>

          
            <div className="flex items-center space-x-8">
               
                <ul className="hidden md:flex space-x-6 text-gray-600 text-sm font-medium">
                    <li className="hover:text-gray-900 cursor-pointer transition">Home</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">FAQ</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">Changelog</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">Blog</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">Download</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">Contact</li>
                </ul>
                
              
                <button className="flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium py-2.5 px-5 rounded-md shadow-md transition-all">
                    <FaPlus className="text-sm" />
                    New Ticket
                </button>
            </div>
        </nav>
    );
};

export default Navbar;