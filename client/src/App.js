import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Chat from "./Components/Chat/Chat";
import "./base.css";


function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Chat />
      </div>
    </Router>
  );
}

export default App;
