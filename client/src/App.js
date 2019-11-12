import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from './Components/Chat/Chat.js'
import Stream from './Components/Stream.js'
import Auth from './Components/Auth';


function App() {
  return (
    <Router>
      <div>
        <p>Hello Group Project</p>
        <Stream />
        <Chat />
        <Auth />
      </div>
    </Router>
  );
}

export default App;
