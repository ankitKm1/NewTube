import React, { useContext, useState, useEffect } from 'react'
import { AnimatePresence, motion, spring } from 'framer-motion'
import LeftNavBar from '../component/LeftNavBar'
import { Context } from '../context/ContextApi'


const Feed = () => {
  const [video, setVideo]= useState(null)
  
  const { mobileMenu, selectedCatagory }= useContext(Context)

  useEffect(() => {
    setVideo(null);

    fetchFromApi(`search?part=snippet&q=${selectedCatagory}`)
      .then((data) => setVideo(data.items))
    }, [selectedCatagory]);
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
      
      <div className='flex mt-32 mx-4 flex-wrap justify-center sm:justify-start'>
        {video.map((video)=>(
        <div key={video.id.videoId}
        
          className='flex flex-col m-2 w-80 cursor-pointer'>

          
          <img src={video.snippet.thumbnails.default} alt={video.snippet.title} 
          
          className=' rounded-lg '
          />
          <span className='font-semibold text-white/[.9] text-[1rem] mt-4' >{video.snippet.title}</span>
          
        </div>
        ))}
      </div>
      
      
    </div>
  )
}

export default Feed
