import React from 'react';
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-10 px-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                
              
                <div className="md:col-span-1">
                    <h2 className="text-lg font-bold mb-4">CS — Ticket System</h2>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                
                <div>
                    <h3 className="text-md font-semibold mb-4">Company</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">Our Mission</li>
                        <li className="hover:text-white cursor-pointer transition">Contact Sales</li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-md font-semibold mb-4">Services</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition">Products & Services</li>
                        <li className="hover:text-white cursor-pointer transition">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer transition">Download Apps</li>
                    </ul>
                </div>

              
                <div>
                    <h3 className="text-md font-semibold mb-4">Information</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer transition">Join Us</li>
                    </ul>
                </div>

             
                <div>
                    <h3 className="text-md font-semibold mb-4">Social Links</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <FaXTwitter /> @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <FaLinkedin /> @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <FaFacebook /> @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <MdEmail /> support@cst.com
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;