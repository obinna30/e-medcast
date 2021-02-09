import React, { useRef, useState } from 'react'
import './Video.css'
import one from './videos/one.mp4'
import two from './videos/two.mp4'
import three from './videos/three.mp4'
import four from './videos/four.mp4'
import five from './videos/five.mp4'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video() {
    const [playing, setPlaying] = useState(   false)


    const videoRef = useRef(null)

    const handleVideoPress =()=>{
        // if video is playing
        if (playing){
            videoRef.current.pause()
            setPlaying(false)
        }else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className='video'>
            
            <video
            onClick={handleVideoPress}
            className='video__player'
            loop
            ref={videoRef}
            src={two}></video>

            <VideoFooter/>
            <VideoSidebar/>
            
        </div>
    )
}

export default Video
