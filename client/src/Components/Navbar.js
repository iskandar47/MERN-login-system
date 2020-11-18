import React, { useContext } from "react"
import { Link } from "react-router-dom"
import AuthService from "../Services/AuthService"
import { AuthContext } from "../Context/AuthContext"

const Navbar = props => {

    const { user, setUser, isAuthenticated, setIsAthenticated} = useContext(AuthContext);

    const logoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user)
                setIsAthenticated(false)
            }
        });
    }

    const unauthenticatedNav = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">Home</li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link">Login</li>
                </Link>
                <Link to="/register">
                    <li className="nav-item nav-link">Register</li>
                </Link>
            </>
        )
    }
    const authenticatedNav = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">Home</li>
                </Link>
                <Link to="/todos">
                    <li className="nav-item nav-link">Todos</li>
                </Link>
                {
                    user.role === "admin" ?
                    <Link to="admin">
                        <li className="nav-item nav-link">Admin</li>
                    </Link> :
                    null
                }
                <button 
                type="button" 
                className="btn btn-link nav-item nav-link"
                onClick={logoutHandler}
                >
                Logout
                </button>
            </>
        )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">CW47</div>
            </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {
                    !isAuthenticated ?
                    unauthenticatedNav() :
                    authenticatedNav()
                    }
                </ul>
                {isAuthenticated ? <h3>{user.username}</h3> : null}
            </div>
        </nav>
    )
}

export default Navbar