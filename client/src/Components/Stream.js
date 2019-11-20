import React from "react";
import "./Stream.css";
import Zoom from "react-reveal/Zoom";

function Stream() {
  const divStyle = {
    height: 550,
    width: 980
  };
  return (
    <Zoom>
      <iframe
        id="Stream"
        style={divStyle}
        src="https://player.twitch.tv/?video=503281087&muted=true"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
        time="01h05m0s"
      ></iframe>
    </Zoom>
  );
}

export default Stream;
