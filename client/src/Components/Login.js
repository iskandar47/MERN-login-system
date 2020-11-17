import React, {useState, useContext} from "react"
import AuthService from "../Services/AuthService"
import Message from "../Components/Message"
import { AuthContext } from "../Context/AuthContext"
import { useHistory } from "react-router"

const Login = (props) => {
    const [user, setUser] = useState({username : "", password : ""})
    const [message, setMessage] = useState(null)
    const authContext = useContext(AuthContext)
    const history = useHistory()
    const onChange = e => {
        e.preventDefault()
        setUser({...user, [e.target.name] : e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        AuthService.login(user).then(data => {
            console.log(data)
            const { isAuthenticated, user, message} = data;
            if (isAuthenticated){
                authContext.setUser(user)
                authContext.setIsAthenticated(isAuthenticated)
                history.push("/todos")
                console.log(history)
            } else {
                setMessage(message)
            }
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Please Sign in</h1>
                <label htmlFor="username" className="sr-only">username :</label>
                <input type="text" 
                       name="username" 
                       className="form-control" 
                       onChange={onChange} 
                       placeholder="Enter username" 
                />
                <label htmlFor="password" className="sr-only">password :</label>
                <input type="password" 
                       name="password" 
                       className="form-control" 
                       onChange={onChange} 
                       placeholder="Enter password" 
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Log in
                </button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    )
}
export default Login