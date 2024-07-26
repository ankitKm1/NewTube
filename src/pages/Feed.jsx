import React, { useContext, useState, useEffect } from 'react'
import { AnimatePresence, motion, spring } from 'framer-motion'
import LeftNavBar from '../component/LeftNavBar'
import { Context } from '../context/ContextApi'
import { fetchFromApi } from '../utils/api'
import VideoCard from '../component/VideoCard'
import { Dummy } from '../utils/dummyData'
const Feed = () => {
  const [video, setVideo]= useState(Dummy)
  
  
  const { mobileMenu, selectedCatagory }= useContext(Context)

  // useEffect(() => {
  //   setVideo(null);

  //   fetchFromApi(`search?part=snippet&q=${selectedCatagory}`)
  //     .then((data) => setVideo(data.items))
  //   }, [selectedCatagory]);
    
  return (
    <div className='flex '>
      
      <AnimatePresence>
        {mobileMenu&&(
          <motion.div
            initial={{  x: "-240px" }}
            animate={{  x: 0 ,transition: {
              type: "tween",
              duration: .1
            }}}
            exit={{  x: "-240px" }}
          >
            <LeftNavBar 
              
            />
          </motion.div>
        )}
      </AnimatePresence>
          
      <div className='pt-24'>
        <VideoCard video={video} />
      </div>
    </div>
  )
}

export default Feed
