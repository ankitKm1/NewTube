import React from 'react'
import { useParams } from 'react-router-dom'
const VideoPlayer = () => {
  const { id }= useParams()
  return (
    <div className='bg-white min-h-[95vh] my-20'>
      <div className='flex flex-1'>
        <div className='w-full sticky top-[84px]'>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default VideoPlayer
