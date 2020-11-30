import React from 'react';
import YouTube from 'react-youtube';
 
class Videos extends React.Component {
    
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideoAt(50);
  }
  render() {
    const opts = {
      height: '350',
      width: '600',
      playerVars: {
        // https://www.youtube.com/watch?v=MkLog_27S6U
        autoplay: 1,
      },
    };
 
    return <YouTube videoId="MkLog_27S6U" opts={opts} onReady={this.videoOnReady} />;
  }
 
}
export default Videos