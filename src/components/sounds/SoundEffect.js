import React, { Component } from "react";
import Sound from "react-sound";

export class SoundEffect extends Component {
  /* handleEffect = (num) => {
    let url = "";
    if (num === 1) {
      url = "/sounds/sound1.wav";
    } else if (num === 2) {
      url = "/sounds/sound1.wav";
    }
    return url;
  }; */

  render() {
    return (
      <div>
        <Sound
          url={"/sounds/sound1.wav"}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
        />
      </div>
    );
  }
}

export default SoundEffect;