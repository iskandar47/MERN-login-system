import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"


function App() {
  
  return (
      <Router>
        <Navbar />
        <Route exact path="/"> <Home /> </Route>
        <Route path="/login"> <Login /> </Route>
        <Route path="/register"> <Register /> </Route>
      </Router>
  );
}

export default App;
