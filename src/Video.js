import React, {useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
// import { Player } from 'video-react';


function Video({url,channel,description,song,likes,shares,messages}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);


    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video key={url} onClick={handleVideoPress} className="video__player" loop ref={videoRef}>
                <source src={url} />
             </video>
            {/* <Player src="https://www.youtube.com/watch?v=omLIp5b0760" />  */}
            <VideoFooter channel={channel} description={description} song={song}></VideoFooter>
            <VideoSidebar likes={likes} shares={shares} messages={messages}></VideoSidebar>
        </div>
    )
}

export default Video
