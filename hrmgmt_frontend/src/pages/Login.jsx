import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(){
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let [error,setError]=useState("")

    let navigate=useNavigate()

    let handleLogin=(event)=>{
        event.preventDefault()
        if(emailid=="admin@gmail.com" && password=="admin"){
            navigate("/userhome")
        }
        else{
            setError("Invalid credentials")
        }
    }
    return(
    <div>
        <form onSubmit={handleLogin}>
            <input type="text" onChange={(e)=>setEmailid(e.target.value)} value={emailid} placeholder="Enter emailid"></input><br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password"></input><br/>
            <button type="submit">Login</button>
        </form>
        {error && <div className="alert-danger">{error}</div>}
    </div>
    )
}

export default Login