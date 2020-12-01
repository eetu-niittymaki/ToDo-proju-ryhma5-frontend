import React, { Component } from "react";
import Sound from "react-sound";

export class Play extends Component {
  render() {
    return (
      <div>
        <Sound
          url="/sounds/backsound.wav"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
          loop="true"
        />
      </div>
    );
  }
}

export default Play;
