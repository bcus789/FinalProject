import React from "react";
import "./Stream.css";

function Stream() {
  const divStyle = {
    height: 550,
    width: 980
  };
  return (
    <iframe
      id="Stream"
      style={divStyle}
      src="https://player.twitch.tv/?video=503281087&muted=true"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
      time="1h5m0s"
    ></iframe>
  );
}

export default Stream;
