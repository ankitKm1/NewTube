import { useContext } from "react";

import LeftNavBarItem from "./LeftNavBarItems";
import { categories } from "../utils/constants";
import { Context } from "../context/ContextApi";
import {VscMenu} from "react-icons/vsc"
import { Link } from "react-router-dom";



const LeftNavBar = () => {
  const { mobileMenu, setMobileMenu, setSelectedCatagory, selectedCatagory }= useContext(Context);
  const handleMenuToggle= ()=> setMobileMenu(!mobileMenu)
  
  const handleClick= (url)=> {
    if(url){
      setSelectedCatagory(url)
      
    } else {
      return false;
    }
  }

  
  


  return (
    <div  className="relative ">
      
      <div 
      
      className="bg-black w-60 flex flex-col z-10  h-screen  ">
        <div className="flex p-4 ">
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
      {categories.map((item)=>(
        <div key={item.name}
          className="w-full px-2 py-1"
        >
          <LeftNavBarItem 
            text={item.type==="home" ? "Home" : item.name}
            icon={item.icon}
            action={()=>handleClick(item.url, item.type)}
          />
          {item.divider && (
            <hr className="my-5 border-white/[.2]" />
          )}
        </div>
        ))}
      </div>
      </div>
  )
}

export default LeftNavBar
