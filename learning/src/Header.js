import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className='flex mt-4'>
      <div className='logo and button flex space-x-8'>
        <img
          className="m-4 w-40 h-15 object-cover"
          alt=""
          src="/section--link--finallogolrwob012png@2x.png"
        />
        <button className="flex w-48 h-10 bg-blue-600 m-4 rounded-lg p-1 text-white text-lg  space-y-1 font-semibold px-3 mt-6">Explore Colleges <p className='mt-2 ml-1'><AiOutlineDown /></p></button>
      </div>
      <div className= "ml-40">
      <ul className='flex space-x-5 text-lg font-semibold'>
        <li className='m-4 mt-6'>Home |</li>
        <li className='flex m-4 mt-6 ml-1'>Our Courses <p className='mt-2   text-sm'><AiFillCaretDown /> </p> | </li>
        <li className='flex m-4 mt-6 ml-1'>Contact  <p className='mt-2 ml-1 text-sm'><AiFillCaretDown /></p> |</li>
        <li className='flex m-4 mt-6 ml-1'>Explore More <p className='mt-2 ml-1 text-sm'><AiFillCaretDown /></p> |</li>
       <li className='m-4 mt-6'> <button className= " h-10 w-40 p-1 bg-blue-300 rounded-lg text-lg text-blue ">College Finder</button></li>
   
      </ul>
      </div>
      
    </div>
  );
};

export default Header;
