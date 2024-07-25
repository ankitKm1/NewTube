import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { VscMenu } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import SearchBar from './SearchBar';
import { Context } from '../context/ContextApi'


const NavBar = () => {
  const { mobileMenu, setMobileMenu }= useContext(Context);
  
  const handleMenuToggle= ()=> setMobileMenu(!mobileMenu)
  return (
    <div className=' absolute top-0 left-0 right-0'>
      <div
      className='flex justify-between px-2 py-4 bg-black w-screen '
      >
        <div className='flex '>
          {/* hamburger */}
          <div onClick={handleMenuToggle}

            className='flex justify-center items-center rounded-full h-10 w-10 cursor-pointer hover:bg-white/[.15] '
          >
          <VscMenu size={22}/>
          </div>
          {/* logo */}
          <div className='px-3'>
          <Link to="/">
            <img className='h-12 ' src="src/assets/logo_with_background.png" alt="NewTube_Logo" />
          </Link>
          </div>
        </div>

        {/* searchBar */}
        <div className='flex  '>
          <input
            type='text'
            placeholder='  Search'
            className='bg-transparent border-r border-l rounded-s-3xl p-2 border-t border-b outline-none w-32 sm:w-56 md:w-80'
          />
          <button className='bg-white/[.15] w-[40px] flex justify-center items-center border-t border-b border-r rounded-r-2xl hover:bg-white/[.3]'>
            <CiSearch className='text-2xl'/>
          </button>
        </div>

        <div
          className='flex justify-center items-center p-3 rounded-full hover:bg-white/[.15] cursor-pointer'
        >
          <FaRegUserCircle className='text-2xl'/>
        </div>

      </div>
    </div>
  )
}

export default NavBar
