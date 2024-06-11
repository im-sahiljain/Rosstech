import React from 'react';
import Footerlogo from '../assets/Footerlogo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="container mx-auto flex justify-between items-center px-40 py-24">
        <div className=''>
          <img src={Footerlogo} alt=""/>
          <p className= "text-sm mb-10 mt-2">connecting your supply chain seamlessly</p>
          <p className="mt-2 text-sm">Contact Us - </p>
          <p><a href="#" className=" text-sm">company@gmail.com</a></p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-center">
            <a href="#" className="text-links hover:text-white hover:underline text-2xl">Instagram</a>
            <a href="#" className="text-links hover:text-white hover:underline text-2xl">Facebook</a>
            <a href="#" className="text-links hover:text-white hover:underline text-2xl">Twitter</a>
            <a href="#" className="text-links hover:text-white hover:underline text-2xl">LinkedIn</a>
          </div>
      </div>
      <div className="border-t border-gray-600 mt-4 pt-4 text-center">
        <p className="text-gray-400 text-lg pb-5">&copy; Rosstech 2024, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
