import React from "react";

function Stream() {
    const divStyle = {
        height: 300,
        width: 440
    };
    return (



        <iframe style={divStyle}
            src="https://player.twitch.tv/?video=503281087&muted=true"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            time='01h05m0s'
        >

        </iframe>
    );
}

export default Stream;
