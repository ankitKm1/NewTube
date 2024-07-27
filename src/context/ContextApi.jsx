import { createContext, useState } from "react";

export const Context = createContext()

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [selectedCatagory, setSelectedCatagory]= useState("New")
  
  const [mobileMenu, setMobileMenu] = useState(true);
  

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
        
      }}
    >
      {children}
    </Context.Provider>
  );
};

