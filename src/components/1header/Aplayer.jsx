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
              {this.state.isPlaying ? (
                <div className="iconify" data-icon="icon-park:pause">
                  {""}
                </div>
              ) : (
                <div className="iconify" data-icon="icon-park:play">
                  {""}
                </div>
              )}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Aplayer;
