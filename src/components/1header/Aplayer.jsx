import React, { Component, useState } from "react";

import AudioFile from "./op.mp3";

class Aplayer extends Component {
  audioSong = new Audio(AudioFile);

  state = {
    isPlaying: false,
  };

  playPause = () => {
    let data = this.state.isPlaying;

    if (data) {
      this.audioSong.pause();
    } else {
      this.audioSong.play();
    }

    this.setState({ isPlaying: !data });
  };

  render() {
    return (
      <>
        <div>
          <div>
            <button onClick={this.playPause}>
              {this.state.isPlaying ? "playing" : "paused"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Aplayer;
