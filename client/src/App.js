import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Todos from "./Components/Todos"
import Admin from "./Components/Admin"
import PrivateRoute from "./HOCs/PrivateRoutes"
import UnPrivateRoute from "./HOCs/UnPrivateRoutes"


function App() {
  
  return (
      <Router>
        <Navbar />
        <Route exact path="/"> <Home /> </Route>
        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/register" component={Register} />
        <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} /> 
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} /> 
      </Router>
  );
}

export default App;
