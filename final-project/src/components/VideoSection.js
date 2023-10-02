import React from 'react';
import './VideoSection.css';

function VideoSection({ videoUrl }) {
  return (
    <div id="scro1" className="container">
      {/* Left content */}
      <div className="left">
        <h2 className="h2">Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis nisl non lorem pellentesque, in varius est tempus.
        </p>
        <button onClick={() => alert('Need to login First')}>Learn More</button>
        <button onClick={() => alert('Need to login First')}>&larr;</button>
      </div>
      
      {/* Right content */}
      <div className="right">
        <div className="border-container">
          <div  className="left-border"></div>
          <div className="content">
            <a href={videoUrl} target="_blank">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src={videoUrl}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
