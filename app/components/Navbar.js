import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='py-6 bg-white/90 backdrop-blur backdrop-filter'>
      <ul className='container mx-auto flex gap-5 justify-between text-blue-950 uppercase cursor-pointer font-semibold'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/teams'>Teams</Link>
        </li>
        <li>
          <Link href='/events'>Events</Link>
        </li>
        <li>
          <Link href='/speakers'>Speakers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
