import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"


export function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    function clickHandler(e){
        e.preventDefault()
        setUser({username, password})
        setUserName("")
        setPassword("")

    }

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                value={username}
                placeholder="Enter username"
                onChange={(e) => setUserName(e.target.value)}
            />

            <input
                type="text"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={clickHandler}>Login</button>

        </div>
    )
}