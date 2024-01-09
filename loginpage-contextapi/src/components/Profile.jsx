import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Login } from "./Login"


export function Profile(){
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
        
}