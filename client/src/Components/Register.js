import React, {useState, useEffect, useRef} from "react"
import AuthService from "../Services/AuthService"
import Message from "../Components/Message"
import { useHistory } from "react-router"

const Register = (props) => {
    const [user, setUser] = useState({username : "", password : "", role : ""})
    const [message, setMessage] = useState(null)
    const history = useHistory()

    let timerID = useRef(null)

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID)
        }
    }, []);
    const onChange = e => {
        e.preventDefault()
        setUser({...user, [e.target.name] : e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        AuthService.register(user).then(data => {
           const { message } = data
           setMessage(message)
           console.log(message)
           resetForm()
           if (!message.msgError){
               timerID = setTimeout(()=>{
                    history.push("/login");
               }, 2000)
           }
        });
    }
    const resetForm = ()=>{
        setUser({username : "", password : "", role : ""})
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Please Register</h1>
                <label htmlFor="username" className="sr-only">username :</label>
                <input type="text"
                       value={user.username}
                       name="username" 
                       className="form-control" 
                       onChange={onChange} 
                       placeholder="Enter username" 
                />
                <label htmlFor="password" className="sr-only">password :</label>
                <input type="password"
                       value={user.password} 
                       name="password" 
                       className="form-control" 
                       onChange={onChange} 
                       placeholder="Enter password" 
                />
                <label htmlFor="role" className="sr-only">role :</label>
                <input type="text"
                       value={user.role} 
                       name="role" 
                       className="form-control" 
                       onChange={onChange} 
                       placeholder="Enter your role (admin / user)" 
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Register
                </button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    )
}
export default Register