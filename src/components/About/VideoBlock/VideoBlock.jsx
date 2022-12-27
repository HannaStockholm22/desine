import React, { useState } from 'react'
import ls from './VideoBlock.module.css';
import ModalVideo from 'react-modal-video';
import "react-modal-video/css/modal-video.css";

const VideoBlock = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={ls.inner}>
            <ModalVideo channel='custom' autoplay isOpen={isOpen} url='video/video1.mp4' onClose={() => setOpen(false)} />
            <button className={ls.btn} onClick={() => setOpen(true)}>
                <img src='images/about/play_button.svg' alt="play" />
            </button>
        </div>
    )
}
export default VideoBlock;
