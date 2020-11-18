import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Todos from "./Components/Todos"
import Admin from "./Components/Admin"


function App() {
  
  return (
      <Router>
        <Navbar />
        <Route exact path="/"> <Home /> </Route>
        <Route path="/login"> <Login /> </Route>
        <Route path="/register"> <Register /> </Route>
        <Route path="/todos"> <Todos /> </Route>
        <Route path="/admin"> <Admin/> </Route>
      </Router>
  );
}

export default App;
