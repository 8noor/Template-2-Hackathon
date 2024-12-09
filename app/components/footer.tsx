import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h2 className="text-lg md:text-xl font-bold">Menu</h2>
            <div className='space-y-2'>
              <h2><Link href={'/'}>New Arrivals</Link></h2>
              <h2><Link href={'/'}>Best sellers</Link></h2>
              <h2><Link href={'/'}>Recently viewed</Link></h2>
              <h2><Link href={'/'}>Popular this week</Link></h2>
              <h2><Link href={'/'}>All Products</Link></h2>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h2 className="text-lg md:text-xl font-bold">Categories</h2>
            <div className='space-y-2'>
              <h2><Link href={'/'}>Crockery</Link></h2>
              <h2><Link href={'/'}>Furniture</Link></h2>
              <h2><Link href={'/'}>Homeware</Link></h2>
              <h2><Link href={'/'}>Plant pots</Link></h2>
              <h2><Link href={'/'}>Chairs</Link></h2>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h2 className="text-lg md:text-xl font-bold">Our Company</h2>
            <div className='space-y-2'>
              <h2><Link href='/about'>About us</Link></h2>
              <h2><Link href={'/'}>Vacancies</Link></h2>
              <h2><Link href={'/'}>Contact us</Link></h2>
              <h2><Link href={'/'}>Privacy</Link></h2>
              <h2><Link href={'/'}>Return policy</Link></h2>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h2 className="text-lg md:text-xl font-bold">Join our mailing list Anum Rajput</h2>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                Signup
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h2>Copyright 2022 Avion LTD</h2>
          </div>
          <div className='flex gap-4'>
            <Link href={'/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
