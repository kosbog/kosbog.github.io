import React from 'react';
import video_mp4 from '../assets/videos/For_Wes.mp4';
import video_ogv from '../assets/videos/For_Wes.ogv';
import video_webm from '../assets/videos/For_Wes.webm';

const Video = () => {
    return (
        <div>
            <video autoPlay loop id="video">
                <source src={video_mp4} type="video/mp4" />
                <source src={video_webm} type="video/webm" />
                <source src={video_ogv} type="video/ogg" />
            </video>
        </div>
    )
};

export default Video;