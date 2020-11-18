import React, {useContext, Component} from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

const PrivateRoute = ({component : Component, roles, ...rest}) => {
    const {isAuthenticated, user} = useContext(AuthContext)
    return (
        <Route {...res} render={props => {
            if (!isAuthenticated){
                return <Redirect to={{pathname : '/login', state : {from : props.location}}} />
            }
        }} />
    )
}