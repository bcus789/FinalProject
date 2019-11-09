import React, { Component } from 'react';

function Home () {

  const imageStyle = { width: 400 };
  
  return (
    <div>
      <p>Theres no place like home</p>
      <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
    </div>
  )
}

export default Home