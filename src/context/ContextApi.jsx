/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { fetchFromApi } from "../utils/api";
import { videoDummyData } from "../utils/dummyData";
export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [selectedCatagory, setSelectedCatagory]= useState("New")
  
  const [mobileMenu, setMobileMenu] = useState(false);
  

  // const fetchByCatagory= async(url)=> {
  //   fetchFromApi(`${url}`).then((data)=> setVideo(data))
  // }

  // useEffect(()=>{
  //   selectedCatagory&&(
  //     fetchByCatagory(selectedCatagory)
  //   )
  // },[selectedCatagory])
  
  

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        mobileMenu,
        setMobileMenu,
        selectedCatagory,
        setSelectedCatagory,
        video
      }}
    >
      {children}
    </Context.Provider>
  );
};