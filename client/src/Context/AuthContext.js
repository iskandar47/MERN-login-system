import React, {createContext, useState, useEffect} from "react"
import AuthService from "../Services/AuthService"

export const AuthContext = createContext()

export default ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAthenticated] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect( () => {
        AuthService.isAuthenticated().then(data => {
            console.log(data)
            setUser(data.user)
            setIsAthenticated(data.isAuthenticated)
            setIsLoaded(true)
        })
    }, [])
    return (
        <div>
            {
            !isLoaded ?
            <h1>Loading ...</h1> :
            <AuthContext.Provider value={{user, isAuthenticated, setUser, setIsAthenticated}}> 
            {children} 
            </AuthContext.Provider>
            }
        </div>
    )
}