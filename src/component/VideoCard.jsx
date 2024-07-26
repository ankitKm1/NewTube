import React from 'react'
import { Link } from 'react-router-dom'
//import { VideoLength } from "../shared/VideoLength"
import Loader from "../shared/Loader"

const Video= ({video})=> {
  
  video.map((video)=> (
      <Link to={`/videos/${video?.id?.videoId}`}>
        <div>
          <img
            src={video?.snippet?.thumbnails?.medium?.url}
            alt={video?.snippet?.description}
          />  
        </div>
      </Link>
    )
  )
}
const detail= ()=> {

}

const VideoCard = ({video}) => {
  if(!video?.length) return <Loader />
  return (
    <div className='flex flex-wrap gap-4 justify-center items-start sm:justify-start '>
      {video.map((video)=> (
      <Link to={`/videos/${video?.id?.videoId}`}
        
      >
        <div className='flex flex-col overflow-hidden border rounded-xl w-[358px] md:w-[320px] '>
          <img
            src={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.description}

            className='object-cover h-[180px] w-full rounded-xl '
          />
          <div className='flex py-3 justify-center overflow-hidden'>
            <img src={``} alt='channel_dp' />
            <div className='flex flex-col'>
              <span className=' text-sm font-bold line-clamp-2'>
                {video?.snippet?.title}
              </span>
              <span className='text-[.75rem] font-semibold mt-2 text-white/[.7] flex items-center '>
                {video?.snippet?.channelTitle}
              </span>
            </div>
          </div>  
        </div>
      </Link>
    ))}
    </div>
  )
}

export default VideoCard
