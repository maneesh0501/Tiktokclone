import React, { useEffect, useState } from 'react';
import Video from './Video'
import './App.css';
import tiktok1 from './tiktok1.mp4';
import tiktok2 from './tiktok2.mp4';
import Axios from './axios';

// var VIDEOS = {
//   deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
//   snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
//   cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
//   spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
// };



function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get('/v2/posts');
      setVideos(response.data);
      return response
    }
    fetchPosts();
  },[]);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) => (
          <Video 
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
