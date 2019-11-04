import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from './Chat/Chat.js'


function App() {
  return (
    <Router>
      <div>
        <p>Hello Group Project</p>
        <Chat />
      </div>
    </Router>
  );
}

export default App;
